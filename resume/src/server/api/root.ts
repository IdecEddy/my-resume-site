import { createTRPCRouter } from '~/server/api/trpc';
import { exampleRouter } from '~/server/api/routers/example';
import { contact_router } from '~/server/api/routers/contact_us';
import { session_router } from '~/server/api/routers/session';
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  contact_us: contact_router,
  session: session_router,
});

// export type definition of API
export type AppRouter = typeof appRouter;
