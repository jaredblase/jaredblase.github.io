/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				primary: '#00947e',
				black: '#363636'
			},
			minHeight: {
				'screen-w-header': `calc(100vh - 3.5rem)`
			}
		},
  },
  plugins: [
		require('tailwind-children')
	],
}
