/** @format */

import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(() => {
		const storedTheme = localStorage.getItem("theme");
		return storedTheme === "light" ? false : true; // Defaults to dark
	});

	useEffect(() => {
		const root = window.document.documentElement;
		if (darkMode) {
			root.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			root.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	return (
		<div
			onClick={() => setDarkMode(!darkMode)}
			className={`w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300`}
		>
			<div
				className={`bg-white dark:bg-yellow-300 w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
					darkMode ? "translate-x-8" : "translate-x-0"
				}`}
			>
				<span className="block text-center text-xs leading-6">
					{darkMode ? "🌞" : "🌙"}
				</span>
			</div>
		</div>
	);
};

export default ThemeToggle;
