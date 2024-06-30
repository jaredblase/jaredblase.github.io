type Project = {
	title: string
	src: string
	link: string
	bgColor?: string
}

export const projects: Project[] = [
	{
		title: 'CitiWorld',
		src: '/images/logos/citiworld.png',
		link: 'https://citiworld.vercel.app/',
	},
	{
		title: 'Abstract',
		src: '/images/logos/abstract.png',
		link: 'https://jaredblase.github.io/abstract-machine-interpreter/',
	},
	{
		title: 'Green Giant FM',
		src: '/images/logos/ggfm.avif',
		link: 'https://greengiantfm.com',
	},
	{
		title: 'Luntian',
		src: '/images/logos/luntian.avif',
		link: 'https://luntian-ph.vercel.app',
	},
	{
		title: 'Peer Tutor Society',
		src: '/images/logos/pts.avif',
		link: 'https://dlsupts.vercel.app',
	},
	{
		title: 'ARW',
		src: '/images/logos/arw.avif',
		link: 'https://arw-2021-web-development.github.io/',
	},
	{
		title: 'NoteGeo',
		src: '/images/logos/notegeo.avif',
		link: 'https://github.com/jaredblase/notegeo',
		bgColor: '#0e121a'
	}
]
