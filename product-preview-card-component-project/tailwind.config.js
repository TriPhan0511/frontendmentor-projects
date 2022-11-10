/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./*.html'],
	theme: {
		extend: {
			colors: {
				darkCyan: 'hsl(158, 36%, 37%)',
				darkCyanActiveState: 'hsl(157, 46%, 17%)',
				cream: 'hsl(30, 38%, 92%)',
				veryDarkBlue: 'hsl(212, 21%, 14%)',
				darkGrayishBlue: 'hsl(228, 12%, 48%)',
			},
			fontFamily: {
				montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
				fraunces: ['Fraunces', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
}
