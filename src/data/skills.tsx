/* eslint-disable react/jsx-key */
type TechnicalSkill = {
  title: string
  items: string[]
}

export const technicalSkills: TechnicalSkill[] = [
  {
    title: 'Languages',
    items: [
      'C',
      'Java',
      'Python',
      'Kotlin',
      'HTML5',
      'CSS3',
      'JavaScript',
      'PHP',
    ],
  },
  {
    title: 'CSS Frameworks',
    items: ['Sass', 'TailwindCSS', 'Bulma'],
  },
  {
    title: 'JavaScript Frameworks',
    items: ['Express', 'React', 'NextJS', 'Svelte'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Others',
    items: ['GitHub', 'Android Studio', 'Jekyll', 'Shopify', 'Docker'],
  },
]

export type Experience = {
  name: string
  organization: string
  description: string
  link: string
  startYear: number
  endYear?: number
  tags?: string[]
}

export const others: Experience[] = [
  {
    name: 'Part-time trainer',
    organization: 'StackTrek',
    link: 'https://stacktrek.com/',
    startYear: 2022,
    endYear: 2023,
    description: "Taught 12 adult students in a boot camp setup. Conducted lectures and hands-on activities to help students understand the basics of web development. Topics include HTML, CSS, JavaScript, and React.",
  },
  {
    name: 'Peer tutor',
    organization: 'DLSU PTS',
    link: 'https://www.facebook.com/pts.dlsu',
    startYear: 2020,
    endYear: 2023,
    description: "Taught a total of 27 peers and help them understand their lessons. Conducted one-on-one and group tutoring sessions for various subjects such as Math and Programming.",
  },
  {
    name: 'Troop Leader',
    organization: 'CKS Scouting',
    link: 'https://www.facebook.com/ckscscoutcenter',
    startYear: 2020,
    endYear: 2023,
    description: 'Led a group of scouts in their journey to become better individuals and citizens. Organized and facilitated activities that promote leadership, teamwork, and service.',
  },
  {
    name: 'VP for Publicities and Creatives',
    organization: 'DLSU PTS',
    link: 'https://www.facebook.com/pts.dlsu',
    startYear: 2020,
    endYear: 2021,
    description: "Managed the organization's social media accounts and created promotional materials for events and services.",
  },
  {
    name: 'AVP for HRD',
    organization: 'DLSU SPRINT',
    link: 'https://www.facebook.com/DlsuSPRINT',
    startYear: 2020,
    endYear: 2021,
    description: 'Handled the recruitment and training of new members. Conducted team-building activities and workshops to improve members\' skills.',
  },
]

export const experiences: Experience[] = [
  {
    name: 'Full Stack Engineer',
    organization: 'Quantum Pulse Consulting',
    link: 'https://qpulse.tech/',
    startYear: 2024,
    description: 'Develop pixel-perfect, responsive web applications from Figma prototypes and integrate AI platforms such as OpenAI and GPT-Trainer for different clients. Working successfully in a remote setup with team members from all around the world.',
    tags: ['React', 'TailwindCSS', 'NextJS', 'Frappe', 'TypeScript'],
  },
  {
    name: 'Tier 2 Technical Support Specialist',
    organization: 'The Support Heroes',
    link: 'https://www.thesupportheroes.com/',
    startYear: 2023,
    endYear: 2025,
    description: 'Respond to technical queries and JavaScript code to integrate third-party apps into different stores and kept response time the shortest among a team of 5 (24.3 minutes). Documented solution and trained tier 1 agents in web dev.',
  },
  {
    name: 'Lead Web Developer',
    organization: 'DLSU PTS',
    link: 'https://www.facebook.com/pts.dlsu',
    startYear: 2022,
    endYear: 2023,
    description: 'Built an application for handling booking tutors and assigning tutors to students. Came with an admin dashboard and simple content management capabilities.',
  },
  {
    name: 'Web Pool Director',
    organization: 'Green Giant FM',
    link: 'https://greengiantfm.com',
    startYear: 2022,
    endYear: 2023,
    description: 'Led a team of 10 members and managed the development of the radio station\'s website and audio streaming operations. Initiated the move to a VPS, a different CMS (Directus), and a new website design. Overall site performance drastically improved by 100%.',
  },
  {
    name: 'Web Developer',
    organization: 'Dr. Andrew Tan Data Science Institute',
    link: 'https://dlsudatasci.github.io',
    startYear: 2021,
    endYear: 2022,
    description: 'Developed and maintained the institute\'s website. Cleaned up unused CSS classes and migrated the CMS to Jekyll.',
  },
  {
    name: 'Web Dev Team Head',
    organization: 'ARW 2021',
    link: 'https://www.facebook.com/DLSUARW',
    startYear: 2021,
    endYear: 2021,
    description: 'Led a team of 7 non-technical members in developing the website for the annual event. The website was built with a CMS for easy content management.',
  },
]
