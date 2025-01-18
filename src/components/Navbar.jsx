/** @format */

import React, { useState } from "react";
import LinkedinPhoto from "../assets/linkedin.png";
import GithubPhoto from "../assets/github.png";
import MailPhoto from "../assets/mail.svg";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-white text-black py-4">
			<div className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
				<div className="text-xl font-bold">Rushi's Portfolio</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-8 font-semibold">
					<div className="flex justify-between w-36">
						<a
							href="https://github.com/RushiPatel9144"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-amber-500 hover:scale-110 transition-transform ease-out"
						>
							<img
								src={GithubPhoto}
								alt="GitHub Logo"
								className="w-5 h-5 mr-2"
							/>
						</a>
						{/* LinkedIn */}
						<a
							href="https://linkedin.com/in/rushipa"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center hover:text-blue-600 hover:scale-110 transition-transform ease-out"
						>
							<img
								src={LinkedinPhoto}
								alt="LinkedIn Logo"
								className="w-5 h-5 mr-2"
							/>
						</a>

						{/* Email */}
						<a
							href="mailto:rushi.m.patel@outlook.com"
							className="flex items-center hover:text-red-500 hover:scale-110 transition-transform ease-out"
						>
							<img
								src={MailPhoto}
								alt="Email Icon"
								className="w-5 h-5 mr-2"
							/>
						</a>
					</div>

					<a
						href="/#about"
						className="hover:text-amber-500 hover:scale-110 transition-transform ease-out"
					>
						About
					</a>
					<a
						href="/#projects"
						className="hover:text-amber-500 hover:scale-110 transition-transform ease-out"
					>
						Projects
					</a>
					<a
						href="/#blog"
						className="hover:text-amber-500 hover:scale-110 transition-transform ease-out"
					>
						Blog
					</a>
					<a
						href="/#contact"
						className="hover:text-amber-500 hover:scale-110 transition-transform ease-out "
					>
						Contact
					</a>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-black focus:outline-none"
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
				<div className="md:hidden bg-black text-white py-4 space-y-4 px-5 flex justify-evenly items-center font-semibold">
					<a href="/#home">Home</a>
					<a href="/#about">About</a>
					<a href="/#projects">Projects</a>
					<a href="/#blog">Blog</a>
					<a href="/#contact">Contact</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
