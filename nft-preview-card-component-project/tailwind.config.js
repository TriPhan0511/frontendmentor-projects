/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				softBlue: 'hsl(215, 51%, 70%)',
				myCyan: 'hsl(178, 100%, 50%)',
			},
		},
	},
	plugins: [],
}
