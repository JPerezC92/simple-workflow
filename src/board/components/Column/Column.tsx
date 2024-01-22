import { ColumnStyles } from './Column.styles';

interface Props {
	titleText?: string;
	children?: React.ReactNode;
}

export function Column({ titleText, children }: Props) {
	return (
		<div className={ColumnStyles.base}>
			<div className={ColumnStyles.slots.columnTitle}>{titleText}</div>

			{children}
		</div>
	);
}
