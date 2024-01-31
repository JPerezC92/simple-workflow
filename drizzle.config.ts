import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
	schema: 'src/server/db/schemas/*',
	out: 'drizzle',
	driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
	dbCredentials: {
		host: 'localhost',
		user: 'postgres',
		password: '123456',
		database: 'simple-workflow',
	},
} satisfies Config;
