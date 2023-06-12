import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const session_router = createTRPCRouter({
  get_all: publicProcedure
    .query(({ctx}) => {
        const sessions = ctx.prisma.web_session.findMany({
          include: {
            ipAddress: true,
          }
        });
        return sessions;
  }),
  add_session: publicProcedure
    .query( async ({ctx}) => {
      try {
        const existing_ip_address = await ctx.prisma.ip_address.findFirst({
          where: {
            ipAddress: ctx.userData['Ip'] as string,
          },
        });
        if (existing_ip_address) {
          console.log('IP address already exists', existing_ip_address);
        } else {
          const new_ip_address = await ctx.prisma.ip_address.create({
            data: {
              ipAddress: ctx.userData['Ip'] as string,
            }
          });
          console.log('New IP address added to DB:', new_ip_address);
        }
        const db_ip = await ctx.prisma.ip_address.findMany({
          where: { ipAddress: ctx.userData['Ip'] as string },
        });
        if (db_ip) {
          console.log(db_ip);
          const create_session = await ctx.prisma.web_session.create({
            data: {
              ipAddress: {
                connect: { id: db_ip[0]['id'] },
              },
              userAgent: ctx.userData['user_agent'] as string, 
            },
          });
          return create_session;
        }
        return "error";
      } catch (error) {
        console.log("error could not add session to db");
        throw error;
      } 
    })
  ,
});

