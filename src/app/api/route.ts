import { db } from '@/server/db';

export async function GET(request: Request) {
	const lists = await db.query.lists.findMany({ with: { cards: true } });

	return Response.json({
		status: 'success',
		data: lists,
	});
}
