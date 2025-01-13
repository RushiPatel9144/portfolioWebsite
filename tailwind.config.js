/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: [
		"./index.html", // Make sure the main HTML file is included
		"./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src directory
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
