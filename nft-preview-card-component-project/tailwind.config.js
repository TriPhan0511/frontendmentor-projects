/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				softBlue: 'hsl(215, 51%, 70%)',
				cyan: 'hsl(178, 100%, 50%)',
				veryDarkBlueMainBg: 'hsl(217, 54%, 11%)',
				veryDarkBlueCardBg: 'hsl(216, 50%, 16%)',
				veryDarkBlueLine: 'hsl(215, 32%, 27%)',
			},
			fontFamily: { outfit: ['Outfit', ...defaultTheme.fontFamily.sans] },
		},
	},
	plugins: [],
}
