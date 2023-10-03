/* eslint-disable react/jsx-key */
type TechnicalSkill = {
	title: string
	items: string[]
}

export const technicalSkills: TechnicalSkill[] = [
	{
		title: 'Languages',
		items: ['C', 'Java', 'Python', 'Kotlin', 'HTML5', 'CSS3', 'JavaScript', 'PHP'],
	},
	{
		title: 'CSS Frameworks',
		items: ['Sass', 'TailwindCSS', 'Bulma']
	},
	{
		title: 'JavsaScript Frameworks',
		items: ['Express', 'React', 'NextJS', 'Svelte']
	},
	{
		title: 'Database',
		items: ['MySQL', 'MongoDB'],
	},
	{
		title: 'Others',
		items: ['GitHub', 'Android Studio', 'Jekyll', 'Shopify']
	},
]

type Extracurricular = {
	title: string
	items: {
		position: string
		organization: string
		link: string
		startYear: number
		endYear?: number
	}[]
}

export const extracurriculars: Extracurricular[] = [
	{
		title: 'Student-Leader',
		items: [
			{
				position: 'Troop Leader',
				organization: 'CKS Scouting',
				link: 'https://www.facebook.com/ckscscoutcenter',
				startYear: 2020,
				endYear: 2023,
			},
			{
				position: 'VP for Publicities and Creatives',
				organization: 'DLSU PTS',
				link: 'https://www.facebook.com/pts.dlsu',
				startYear: 2020,
				endYear: 2021,
			},
			{
				position: 'AVP for HRD',
				organization: 'DLSU SPRINT',
				link: 'https://www.facebook.com/DlsuSPRINT',
				startYear: 2020,
				endYear: 2021,
			}
		]
	},
	{
		title: 'Mentor',
		items: [
			{
				position: 'Part-time trainer',
				organization: 'StackTrek',
				link: 'https://stacktrek.com/',
				startYear: 2022,
				endYear: 2023,
			},
			{
				position: 'Peer tutor',
				organization: 'DLSU PTS',
				link: 'https://www.facebook.com/pts.dlsu',
				startYear: 2020,
				endYear: 2023,
			}
		]
	},
]

type Experience = Extracurricular

export const experiences: Experience[] = [
	{
		title: 'Web Development',
		items: [
			{
				position: 'Technical Support Specialist',
				organization: 'The Support Heroes',
				link: 'https://www.thesupportheroes.com/',
				startYear: 2023
			},
			{
				position: 'Website development committee',
				organization: 'DLSU PTS',
				link: 'https://www.facebook.com/pts.dlsu',
				startYear: 2022,
				endYear: 2023,
			},
			{
				position: 'Website maintainer',
				organization: 'Dr. Andrew Tan Data Science Institute',
				link: 'https://dlsudatasci.github.io',
				startYear: 2021,
				endYear: 2022,
			},
			{
				position: 'Website management director',
				organization: 'Green Giant FM',
				link: 'https://greengiantfm.com',
				startYear: 2022,
				endYear: 2023,
			},
			{
				position: 'Website management member',
				organization: 'Green Giant FM',
				link: 'https://greengiantfm.com',
				startYear: 2021,
				endYear: 2023,
			},
			{
				position: 'Website development team head',
				organization: 'ARW 2021',
				link: 'https://www.facebook.com/DLSUARW',
				startYear: 2021,
			}
		]
	}
]
