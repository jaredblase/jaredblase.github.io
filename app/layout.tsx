import './globals.css'
import { contactInfo } from '@data/contact-info'
import { title, description, link } from '@data/metadata'
import { Metadata } from 'next'
import { MobileMenu } from './mobile-menu'

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
		images: `${link}/images/og_image.jpg`
	}
}

export default function Layout({ children }: { children: React.ReactNode}) {
	return (
		<html lang="en">
			<header className="h-14 w-full fixed z-50 drop-shadow-2xl bg-white">
				<div className="container h-full flex justify-between items-center">
					<a href="#">
						<h1 className="font-semibold text-xl">Jared Sy</h1>
					</a>
					<nav className="h-full hidden sm:flex">
						<a href="#about">About Me</a>
						<a href="#skills">Skills</a>
						<a href="#projects">Projects</a>
						<a href="#publications">Publications</a>
						<a href="#contact">Contact Me</a>
					</nav>
					<MobileMenu />
				</div>
			</header>
			<main className="pt-14">
				{children}
			</main>
			<footer className="bg-primary py-16 text-center space-y-8" id="contact">
				<div className="flex justify-center space-x-8">
					{contactInfo.map(c =>
						<a key={c.title} href={c.link} title={c.title} aria-label={`${c.title} profile link`}>
							{c.icon}
						</a>
					)}
				</div>
				<p>
					<a href='https://www.freepik.com/photos/abstract' className="underline text-white">
						Abstract photo (Used as banner) created by freepik - www.freepik.com
					</a>
				</p>
			</footer>
		</html>
	)
}