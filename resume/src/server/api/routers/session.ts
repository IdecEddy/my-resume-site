import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { makeTimestamp } from '~/utils/makeTimestamp';

export const session_router = createTRPCRouter({
  get_all: publicProcedure.query(({ ctx }) => {
    const sessions = ctx.prisma.web_session.findMany({
      include: {
        ipAddress: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
    return sessions;
  }),
  add_session: publicProcedure.mutation(async ({ ctx }) => {
    try {
      const existing_ip_address =
        await ctx.prisma.ip_address.findFirst({
          where: {
            ipAddress: ctx.userData['Ip'] as string,
          },
        });
      if (existing_ip_address) {
        console.log(
          'IP address already exists',
          existing_ip_address
        );
      } else {
        const new_ip_address =
          await ctx.prisma.ip_address.create({
            data: {
              ipAddress: ctx.userData['Ip'] as string,
            },
          });
        console.log(
          'New IP address added to DB:',
          new_ip_address
        );
      }
      const db_ip = await ctx.prisma.ip_address.findMany({
        where: { ipAddress: ctx.userData['Ip'] as string },
      });
      if (db_ip) {
        console.log(db_ip);
        const create_session =
          await ctx.prisma.web_session.create({
            data: {
              ipAddress: {
                connect: { id: db_ip[0]['id'] },
              },
              sessionDuration: 0,
              userAgent: ctx.userData[
                'user_agent'
              ] as string,
              ipCountry: ctx.userData[
                'ip_country'
              ] as string,
              ipCity: ctx.userData['ip_city'] as string,
              ipState: ctx.userData['ip_state'] as string,
            },
          });
        return { id: create_session.id };
      }
      return 'Could not create new web_session.';
    } catch (error) {
      console.log('error could not add session to db');
      throw error;
    }
  }),
  update_session: publicProcedure
    .input(z.object({ session_id: z.number().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const web_session =
        await ctx.prisma.web_session.findFirst({
          where: {
            id: input.session_id,
          },
        });
      if (!web_session) {
        throw new Error('could not find session');
      }
      const session_duration: number =
        Date.now() - web_session.dateCreated.valueOf();
      const db_update = await ctx.prisma.web_session.update(
        {
          where: { id: input.session_id },
          data: { sessionDuration: session_duration },
        }
      );
      return db_update;
    }),
  get_count: publicProcedure.query(async ({ ctx }) => {
    const number_of_sessions =
      await ctx.prisma.web_session.count();
    return number_of_sessions;
  }),
  get_ip_count: publicProcedure.query(async ({ ctx }) => {
    const number_of_ips =
      await ctx.prisma.ip_address.count();
    return number_of_ips;
  }),
  get_top_five_ips: publicProcedure.query(
    async ({ ctx }) => {
      const top_five_ips: {
        ipAddressId: number;
        count: bigint;
      }[] = await ctx.prisma
        .$queryRaw`SELECT ipAddressId, COUNT(*) as count
    FROM web_session
    GROUP BY ipAddressId
    ORDER BY count DESC
    LIMIT 5`;
      const ip_records = await Promise.all(
        top_five_ips.map(async (db_return) => {
          const ip_address_id = db_return.ipAddressId;
          const ip_address_record =
            await ctx.prisma.ip_address.findFirst({
              where: { id: ip_address_id },
            });
          const ip_address = ip_address_record['ipAddress'];
          const count = Number(db_return.count);
          return { ip: ip_address, count: count };
        })
      );
      return ip_records;
    }
  ),
  get_avg_session_duration: publicProcedure.query(
    async ({ ctx }) => {
      const result = await ctx.prisma.$queryRaw<
        { averageSessionDuration: number }[]
      >`SELECT AVG(sessionDuration) AS averageSessionDuration
      FROM web_session;`;

      const avg_session = Number(
        result[0].averageSessionDuration
      );
      const formatted_duration = makeTimestamp(avg_session);
      return formatted_duration;
    }
  ),
  get_total_session_duration: publicProcedure.query(
    async ({ ctx }) => {
      const result = await ctx.prisma.web_session.aggregate(
        {
          _sum: {
            sessionDuration: true,
          },
        }
      );
      const formated_sum = makeTimestamp(
        result._sum.sessionDuration
      );
      return formated_sum;
    }
  ),
  list_headers: publicProcedure.query(({ ctx }) => {
    return {
      headers: ctx.userData['Headers'] as string,
    };
  }),
});
