import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '4em',
			},
			colors: {
				primary: '#00947e',
				black: '#363636',
			},
			minHeight: {
				'screen-w-header': `calc(100vh - 3.5rem)`,
			},
			animation: {
				cursor: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			fontFamily: {
				mono: ['var(--font-ibm-mono)'],
			},
		},
	},
	plugins: [],
}
export default config
