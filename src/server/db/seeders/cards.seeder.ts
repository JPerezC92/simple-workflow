import * as crypto from 'crypto';

import { db } from '@/server/db';
import { cards } from '@/server/db/schemas';
import { doneUUID, inProgressUUID, toDoUUID } from '@/server/db/seeders';

export async function cardsSeeder() {
	await db
		.insert(cards)
		.values([
			{
				id: crypto.randomUUID(),
				title: 'Generate app scaffold',
				listId: toDoUUID,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add TypeScript',
				listId: toDoUUID,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add Next.js',
				listId: toDoUUID,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add Tailwind',
				listId: inProgressUUID,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add React Query',
				listId: inProgressUUID,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add Prisma',
				listId: inProgressUUID,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add Jest',
				listId: inProgressUUID,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add Cypress',
				listId: doneUUID,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add ESLint',
				listId: doneUUID,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add Prettier',
				listId: doneUUID,
			},
		])
		.execute();
}
