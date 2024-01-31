// import 'dotenv/config';

import { relations } from 'drizzle-orm';
import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

import { lists } from './lists';

export const cards = pgTable('cards', {
	id: uuid('id').primaryKey(),
	title: varchar('title', { length: 100 }),
	listId: uuid('list_id'),
});

export const cardsRelations = relations(cards, ({ one }) => ({
	list: one(lists, {
		fields: [cards.listId],
		references: [lists.id],
	}),
}));
