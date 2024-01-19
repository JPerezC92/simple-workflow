import Image from 'next/image';
import { tv } from 'tailwind-variants';

const HomePageStyles = tv({
	base: 'flex min-h-screen flex-col items-center justify-between p-24',
	slots: {
		header:
			'z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex',
		headerParagraph:
			'fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200  lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30',
		vercelLogoWrapper:
			'fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none dark:from-black dark:via-black',
		vercelLogoLink:
			'pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0',
		vercelLogo: 'dark:invert',
		nextjsLogoWrapper:
			"relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40",
		nextjsLogo: 'relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert',
		linkGrid:
			'mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left',
		linkItem:
			'group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30',
		linkItemArrow:
			'inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none',
		linkItemHeader: 'mb-3 text-2xl font-semibold',
		linkItemParagraph: 'm-0 max-w-[30ch] text-sm opacity-50',
	},
});

export default function HomePage() {
	return (
		<main className={HomePageStyles.base}>
			<header className={HomePageStyles.slots.header}>
				<p className={HomePageStyles.slots.headerParagraph}>
					Get started by editing&nbsp;
					<code className='font-mono font-bold'>src/app/page.tsx</code>
				</p>
				<div className={HomePageStyles.slots.vercelLogoWrapper}>
					<a
						className={HomePageStyles.slots.vercelLogoLink}
						href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						By{' '}
						<Image
							src='/vercel.svg'
							alt='Vercel Logo'
							className={HomePageStyles.slots.vercelLogo}
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</header>

			<div className={HomePageStyles.slots.nextjsLogoWrapper}>
				<Image
					className={HomePageStyles.slots.nextjsLogo}
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</div>

			<div className={HomePageStyles.slots.linkGrid}>
				<a
					href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={HomePageStyles.slots.linkItem}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={HomePageStyles.slots.linkItemHeader}>
						Docs{' '}
						<span className={HomePageStyles.slots.linkItemArrow}>-&gt;</span>
					</h2>
					<p className={HomePageStyles.slots.linkItemParagraph}>
						Find in-depth information about Next.js features and API.
					</p>
				</a>

				<a
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					className={HomePageStyles.slots.linkItem}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={HomePageStyles.slots.linkItemHeader}>
						Learn{' '}
						<span className={HomePageStyles.slots.linkItemArrow}>-&gt;</span>
					</h2>
					<p className={HomePageStyles.slots.linkItemParagraph}>
						Learn about Next.js in an interactive course with&nbsp;quizzes!
					</p>
				</a>

				<a
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={HomePageStyles.slots.linkItem}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={HomePageStyles.slots.linkItemHeader}>
						Templates{' '}
						<span className={HomePageStyles.slots.linkItemArrow}>-&gt;</span>
					</h2>
					<p className={HomePageStyles.slots.linkItemParagraph}>
						Explore starter templates for Next.js.
					</p>
				</a>

				<a
					href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={HomePageStyles.slots.linkItem}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={HomePageStyles.slots.linkItemHeader}>
						Deploy{' '}
						<span className={HomePageStyles.slots.linkItemArrow}>-&gt;</span>
					</h2>
					<p className={HomePageStyles.slots.linkItemParagraph}>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>
			</div>
		</main>
	);
}
