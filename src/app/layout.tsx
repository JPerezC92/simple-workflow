import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { tv } from 'tailwind-variants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const body = tv({
	base: 'h-dvh flex-col bg-blue-500',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className=''>
			<body className={body({ className: inter.className })}>{children}</body>
		</html>
	);
}
