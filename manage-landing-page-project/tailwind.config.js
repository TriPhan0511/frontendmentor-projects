/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./*.html'],
	theme: {
		extend: {
			colors: {
				brightRed: 'hsl(12, 88%, 59%)',
				darkBlue: 'hsl(228, 39%, 23%)',
				darkGrayishBlue: 'hsl(227, 12%, 61%)',
				veryDarkBlue: 'hsl(233, 12%, 13%)',
				veryPaleRed: 'hsl(13, 100%, 96%)',
				varyLightGray: 'hsl(0, 0%, 98%)',
			},
			fontFamily: {
				beVietnamPro: ['Be Vietnam Pro', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
