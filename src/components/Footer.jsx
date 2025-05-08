/** @format */

import React from "react";
import back from "../assets/2.jpg";

const Footer = () => {
	return (
		<footer
			id="footer"
			className="bg-gradient-to-r from-gray-800 to-black text-white py-4 text-center"
			style={{
				background: `url(${back})`,
			}}
		>
			
			<p className="text-sm">
				&copy; {new Date().getFullYear()} Rushi Patel. All rights
				reserved.
			</p>
			<div className="flex justify-center space-x-4 mt-2">
				<a
					href="https://github.com/RushiPatel9144"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-200 hover:text-gray-500"
				>
					GitHub
				</a>
				<a
					href="https://linkedin.com/in/rushipa"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-200 hover:text-gray-500"
				>
					LinkedIn
				</a>
				<a
					href="mailto:rushi.m.patel@outlook.com"
					className="text-gray-200 hover:text-gray-500"
				>
					Email
				</a>
			</div>
		</footer>
	);
};

export default Footer;
