/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./*.html'],
	theme: {
		extend: {
			colors: {
				myAmber: '#F3EAE3',
				myBlue: '#3D8168',
			},
			fontFamily: {
				montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
				fraunces: ['Fraunces', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
}
