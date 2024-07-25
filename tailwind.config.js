/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
	theme: {
		extend: {
			fontFamily: {
				itali: ['Italiana', 'sans-serif'],
				dm: ['DM Sans', 'sans-serif'],
			},
			animation: {
				'infinite-scroll': 'infinite-scroll 35s linear infinite',
				'infinite-scroll-reverse':
					'infinite-scroll-reverse 105s linear infinite',
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
				'infinite-scroll-reverse': {
					from: { transform: 'translateX(-100%)' },
					to: { transform: 'translateX(0)' },
				},
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
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
			'6xl': '4.052rem',
			'7xl': '6.052rem',
			'9xl': '15rem',
		},
	},
	plugins: [],
}
