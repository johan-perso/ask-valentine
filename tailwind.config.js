/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	plugins: [require("daisyui")],
	theme: {
		extend: {
			colors: {
				'mandy': {
					'50': '#fef2f3',
					'100': '#fde6e7',
					'200': '#fbd0d5',
					'300': '#f7aab2',
					'400': '#f27a8a',
					'500': '#ea546c',
					'600': '#d5294d',
					'700': '#b31d3f',
					'800': '#961b3c',
					'900': '#811a39',
					'950': '#48091a',
				},
			}
		}
	},
	daisyui: {
		logs: false,
		themes: [
			"light"
		],
	}
}
