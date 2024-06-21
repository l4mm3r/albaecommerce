/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
	theme: {
		extend: {
			fontFamily: {
				itali: ['Italiana', 'sans-serif'],
				dm: ['DM Sans', 'sans-serif'],
			},
		},
		letterSpacing: {
			tightest: '-.075em',
			tighter: '-.05em',
			tight: '-.025em',
			normal: '0',
			wide: '.025em',
			wider: '.05em',
			widest: '.40em',
		},
	},
	plugins: [],
}
