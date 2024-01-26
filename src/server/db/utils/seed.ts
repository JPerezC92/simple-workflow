import { db } from '@/server/db';
import { cardsSeeder, listsSeeder } from '@/server/db/seeders';

async function seed() {
	// console.log(db);
	const tableSchema = db._.schema;

	if (!tableSchema) {
		throw new Error('No table schema found');
	}

	await listsSeeder();
	await cardsSeeder();

	console.log('✅ Database seeded');
}

seed()
	.then(() => {
		process.exit(0);
	})
	.catch(() => {
		process.exit(1);
	});
