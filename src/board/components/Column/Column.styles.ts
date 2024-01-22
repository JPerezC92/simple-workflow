import { tv } from 'tailwind-variants';

export const ColumnStyles = tv({
	base: 'mr-5 min-h-10 w-80 flex-grow-0 rounded bg-orange-400 p-2 shadow-md',
	slots: {
		columnTitle: 'p-1 font-bold',
	},
});
