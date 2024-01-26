import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from '@/server/db/schemas';

export const queryClient = postgres({
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	host: process.env.DATABASE_HOST,
	port: Number(process.env.DATABASE_PORT),
	database: process.env.DATABASE_NAME,
});

export const db = drizzle(queryClient, { schema });
