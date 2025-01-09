/** @format */

import React, { useState } from "react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-sky-950  backdrop-blur-sm text-white py-4">
			<div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
				<div className="text-xl font-bold">Rushi's Portfolio</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-8 font-bold">
					<a
						href="#home"
						className="hover:text-blue-400 hover:scale-110 transition-transform ease-out"
					>
						Home
					</a>
					<a
						href="#about"
						className="hover:text-blue-400 hover:scale-110 transition-transform ease-out"
					>
						About
					</a>
					<a
						href="#projects"
						className="hover:text-blue-400 hover:scale-110 transition-transform ease-out"
					>
						Projects
					</a>
					<a
						href="#blog"
						className="hover:text-blue-400 hover:scale-110 transition-transform ease-out"
					>
						Blog
					</a>
					<a
						href="#contact"
						className="hover:text-blue-400 hover:scale-110 transition-transform ease-out "
					>
						Contact
					</a>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-white focus:outline-none"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-gray-800 text-white py-4 space-y-4 px-5">
					<a
						href="#home"
						className="hover:text-yellow-100"
					>
						Home
					</a>
					<a
						href="#about"
						className="hover:text-yellow-100"
					>
						About
					</a>
					<a
						href="#projects"
						className="hover:text-yellow-100"
					>
						Projects
					</a>
					<a
						href="#blog"
						className="hover:text-yellow-100"
					>
						Blog
					</a>
					<a
						href="#contact"
						className="hover:text-yellow-100"
					>
						Contact
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
