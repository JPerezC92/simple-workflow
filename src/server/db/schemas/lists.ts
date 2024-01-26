import { relations } from 'drizzle-orm';
import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

import { cards } from './cards';

export const lists = pgTable('lists', {
	id: uuid('id').primaryKey(),
	title: varchar('title', { length: 100 }),
});

export const listsRelations = relations(lists, ({ many }) => ({
	cards: many(cards),
}));
