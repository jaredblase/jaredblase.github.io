import './globals.css'
import { title, description, link } from '@/data/metadata'
import { Metadata } from 'next'
import { ibmMono } from '@/fonts/ibm-mono'

export const metadata: Metadata = {
	title,
	description,
	metadataBase: new URL('https://jaredblase.github.io'),
	keywords: ['Jared', 'Blase', 'Sy', 'developer', 'portfolio'],
	generator: 'Next.js',
	openGraph: {
		title,
		description,
		type: 'profile',
		url: link,
		images: `${link}/images/og_image.jpg`,
	},
	twitter: {
		title,
		description,
		images: `${link}/images/og_image.jpg`,
	},
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${ibmMono.variable}`}>
			<body>
				<header className="sticky top-0 z-10 h-16 bg-linear-to-b from-white to-transparent" />
				{children}
			</body>
		</html>
	)
}
