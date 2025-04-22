import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/index.js' // add this line
import { mainRouter } from './routes/index.route.js' // add this line
const app = new Hono()
export const db = new PrismaClient(); // add this line (initialize PrismaClient)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

db.$connect()
	.then(() => {
		console.log("Connected to the database");
	})
	.catch((error) => {
		console.error("Error connecting to the database:", error);
	});

  app.route("", mainRouter);