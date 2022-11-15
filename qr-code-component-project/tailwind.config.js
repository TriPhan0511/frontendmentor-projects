/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				lightGray: 'hsl(212, 45%, 89%)',
				grayishBlue: 'hsl(220, 15%, 55%)',
				darkBlue: 'hsl(218, 44%, 22%)',
			},
			fontFamily: { outfit: ['Outfit', ...defaultTheme.fontFamily.sans] },
		},
	},
	plugins: [],
}
