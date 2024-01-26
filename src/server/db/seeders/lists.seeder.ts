import * as crypto from 'crypto';

import { db } from '@/server/db';
import { lists } from '@/server/db/schemas';

export const toDoUUID = crypto.randomUUID();
export const inProgressUUID = crypto.randomUUID();
export const doneUUID = crypto.randomUUID();

export async function listsSeeder() {
	await db
		.insert(lists)
		.values([
			{
				id: toDoUUID,
				title: 'TO DO',
			},
			{
				id: inProgressUUID,
				title: 'IN PROGRESS',
			},
			{
				id: doneUUID,
				title: 'DONE',
			},
		])
		.execute();
}
