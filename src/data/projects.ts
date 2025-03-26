type BaseProject = {
	title: string
	link: string
	year: number
	tags: string[]
	priority: false
}

export type PriorityProject = {
	title: string
	src: string
	link: string
	year: number
	tags: string[]
	priority: true
	description: string
}

export type Project = BaseProject | PriorityProject

export function isPriorityProject(
	project: Project
): project is PriorityProject {
	return project.priority === true
}

export const projects: Project[] = [
	{
		title: 'Expungement.ai',
		src: '/images/expungement.avif',
		link: 'https://expungement.ai/',
		year: 2025,
		tags: [
			'React Router',
			'TypeScript',
			'Tailwind CSS',
			'GPT Trainer',
			'Frappe',
		],
		priority: true,
		description:
			'Makes the process of petitioning for clearing criminal records much more easier and accessible.',
	},
	{
		title: 'CitiWorld',
		src: '/images/citiworld.avif',
		link: 'https://citi-world.com/',
		year: 2023,
		priority: true,
		tags: ['NextJS', 'TypeScript', 'Tailwind CSS', 'Tina.io'],
		description:
			'A virtual world where you can interact with other people, play games, and have fun.',
	},
	{
		title: 'Abstract',
		src: '/images/abstract.avif',
		link: 'https://jaredblase.github.io/abstract-machine-interpreter/',
		year: 2023,
		tags: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Vite'],
		priority: true,
		description:
			'This project is an interpreter for various abstract models of computation. These models involve different types of memory storage, memory access, and input-output access.',
	},
	{
		title: 'Green Giant FM',
		src: '/images/ggfm.avif',
		link: 'https://greengiantfm.com',
		year: 2023,
		tags: ['NextJS', 'Tailwind CSS', 'Directus', 'Docker'],
		priority: true,
		description:
			'The radio station of De La Salle University where music is directly streamed from the campus to the world.',
	},
	{
		title: 'Luntian',
		link: 'https://luntian-ph.vercel.app',
		year: 2023,
		tags: ['NextJS', 'Tailwind CSS', 'Google API'],
		priority: false,
	},
	{
		title: 'Peer Tutor Society',
		link: 'https://dlsupts.vercel.app',
		year: 2023,
		tags: ['NextJS', 'Tailwind CSS', 'MongoDB'],
		priority: false,
	},
	{
		title: 'ARW',
		link: 'https://arw-2021-web-development.github.io/',
		year: 2021,
		tags: ['Jekyll', 'SCSS'],
		priority: false,
	},
	{
		title: 'NoteGeo',
		link: 'https://github.com/jaredblase/notegeo',
		year: 2022,
		tags: ['Jekyll', 'SCSS'],
		priority: false,
	},
]
