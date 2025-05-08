/** @format */

import React, { useState } from "react";
import LinkedinPhoto from "../assets/linkedin.png";
import GithubPhoto from "../assets/github.png";
import MailPhoto from "../assets/mail.svg";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/20 shadow-md">
			<nav className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center text-white">
				{/* Logo/Brand */}
				<div className="text-2xl font-bold tracking-wide text-white drop-shadow-md">
					<a href="/#">rushi.404</a>
				</div>

				{/* Desktop Links */}
				<div className="hidden md:flex items-center space-x-8 font-semibold text-sm">
					{/* Icons */}
					<div className="flex space-x-4 items-center">
						<a
							href="https://github.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:drop-shadow-[0_0_5px_#f59e0b] transition-transform transform hover:scale-110"
						>
							<img
								src={GithubPhoto}
								alt="GitHub"
								className="w-5 h-5 brightness-0 invert"
							/>
						</a>

						<a
							href="https://linkedin.com/in/rushipa"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:drop-shadow-[0_0_5px_#0ea5e9] transition-transform transform hover:scale-110"
						>
							<img
								src={LinkedinPhoto}
								alt="LinkedIn"
								className="w-5 h-5 brightness-0 invert"
							/>
						</a>

						<a
							href="mailto:rushi.m.patel@outlook.com"
							className="hover:drop-shadow-[0_0_5px_#f59e0b]  hover:text-amber-200 transition-transform transform hover:scale-110"
						>
							<img
								src={MailPhoto}
								alt="Email"
								className="w-5 h-5 brightness-0 invert	"
							/>
						</a>
					</div>

					{/* Navigation Links */}
					{["About", "Projects", "Blog", "Contact"].map((item) => (
						<a
							key={item}
							href={`/#${item.toLowerCase()}`}
							className=" hover:drop-shadow-[0_0_5px_#f59e0b] transform hover:scale-110 hover:text-amber-200 transition-colors duration-200"
						>
							{item}
						</a>
					))}
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden text-white">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-7 h-7"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-white/10 backdrop-blur-md text-white px-6 py-4 shadow-lg space-y-4 font-medium">
					{["Home", "About", "Projects", "Blog", "Contact"].map(
						(item) => (
							<a
								key={item}
								href={`/#${item.toLowerCase()}`}
								className="block hover:text-amber-400 transition-colors"
							>
								{item}
							</a>
						)
					)}
				</div>
			)}
		</header>
	);
};

export default Navbar;
