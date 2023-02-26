/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Cousine", "monospace"]
		},
		extend: {
			colors: {
				"primary-light": "#FFFFFF",
				"secondary-light": "#EFEFEF",
				"accent-light": "#000000",

				"primary-dark": "#000000",
				"secondary-dark": "#101010",
				"accent-dark": "#FFFFFF",

				"error": "#ff2222",
				"success": "#22ff22"
			}
		}
	},
	plugins: []
};
