import { Column } from '@/src/board/components/Column';

import { BoardStyles } from './Board.styles';

const data = [
	{
		id: '1',
		title: 'TO DO',
		cards: [
			{
				id: '1',
				title: 'Generate app scaffold',
			},
			{
				id: '2',
				title: 'Create board',
			},
			{
				id: '3',
				title: 'Create column',
			},
		],
	},
	{
		id: '2',
		title: 'IN PROGRESS',
		cards: [
			{
				id: '1',
				title: 'Create card',
			},
			{
				id: '2',
				title: 'Drag and drop',
			},
		],
	},

	{
		id: '3',
		title: 'DONE',
		cards: [
			{
				id: '1',
				title: 'Begin to use static typing',
			},
		],
	},
];

export function Board() {
	return (
		<div className={BoardStyles.slots.container}>
			<h1 className='m-10 text-center text-4xl font-bold uppercase text-slate-800'>
				Simple Workflow
			</h1>

			<div className={BoardStyles.slots.board}>
				{data.map(column => (
					<Column titleText={column.title} key={column.id}>
						{column.cards.map(card => (
							<div className={BoardStyles.slots.card} key={card.id}>
								{card.title}
							</div>
						))}
					</Column>
				))}
			</div>
		</div>
	);
}
