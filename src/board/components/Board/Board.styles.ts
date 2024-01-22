import { tv } from 'tailwind-variants';

export const BoardStyles = tv({
	slots: {
		container: 'w-dvw overflow-auto',
		board: 'flex min-w-max overflow-auto overflow-y-hidden p-5',
		card: 'mb-1 max-w-80 cursor-pointer rounded bg-white p-1 shadow-md ',
	},
});
