/** @format */

import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-4 text-center">
			<p className="text-sm">
				&copy; {new Date().getFullYear()} Rushi Patel. All rights
				reserved.
			</p>
			<div className="flex justify-center space-x-4 mt-2">
				<a
					href="https://github.com/RushiPatel9144"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-400 hover:text-blue-500"
				>
					GitHub
				</a>
				<a
					href="https://linkedin.com/in/rushipa"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-400 hover:text-blue-500"
				>
					LinkedIn
				</a>
				<a
					href="mailto:rushi.m.patel@outlook.com"
					className="text-blue-400 hover:text-blue-500"
				>
					Email
				</a>
			</div>
		</footer>
	);
};

export default Footer;
