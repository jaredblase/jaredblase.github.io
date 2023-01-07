import Head from 'next/head'

type CustomHeadProps = {
	title: string
	description: string
	link: string
}

export function CustomHead({ title, description, link }: CustomHeadProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content="portfolio, developer, Jared Sy, Jared Blase Sy" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.jpg" />

			<meta name="og:title" content={title} />
			<meta name="og:url" content={link} />
			<meta name="og:type" content="profile" />
			<meta name="og:description" content={description} />
			<meta name="og:image" content={`${link}/images/og_image.jpg`} />

			<meta name="twitter:title" content={title} />
			<meta name="twitter:url" content={link} />
			<meta name="twitter:image" content={`${link}/images/og_image.jpg`} />
			<meta name="twitter:description" content={description} />

			<link rel="shortcut icon" type="image/jpg" href={`${link}/images/favicon.jpg`} />
		</Head>
	)
}