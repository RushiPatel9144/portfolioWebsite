/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	darkMode: "class",
	content: [
		"./index.html", // Make sure the main HTML file is included
		"./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src directory
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"], // Default sans-serif font
				raleway: ["Raleway", "sans-serif"], // Raleway font for headings
				quicksand: ["Quicksand", "sans-serif"], // Quicksand for softer body text
				cinzel: ["Cinzel", "serif"], // Cinzel for a more spiritual, timeless vibe
				merriweather: ["Merriweather", "serif"], // Merriweather for a calm, readable vibe
				playfair: ["Playfair Display", "serif"], // Playfair Display for elegant headings
			},
			fontSize: {
				xxl: "3rem", // Extra large for spiritual headings
				xxxl: "4rem", // Larger text for impactful quotes
			},
			glassDark: "#1f1f1f99",
		},
	},
	plugins: [],
};
