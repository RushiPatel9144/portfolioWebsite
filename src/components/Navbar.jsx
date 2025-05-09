/** @format */

import React, { useState } from "react";
import LinkedinPhoto from "../assets/linkedin.png";
import GithubPhoto from "../assets/github.png";
import MailPhoto from "../assets/mail.svg";
import InstagramPhoto from "../assets/instagram.png";
import ThemeToggle from "./ThemeToggle";
import CCNABadgePhoto from "../assets/ccna-badge.png"; // Import the badge image

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-black/10 dark:border-white/20 shadow-md">
			<nav className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center text-black dark:text-white">
				{/* Left: Logo + ThemeToggle */}
				<div className="flex items-center space-x-4">
					<div className="text-2xl font-bold tracking-wide drop-shadow-md text-black dark:text-white">
						<a href="/#">
							rushi
							<span className=" text-gray-300 dark:text-amber-400">
								.
							</span>
							404
						</a>
					</div>
					<ThemeToggle />
				</div>

				{/* Desktop Links */}
				<div className="hidden mx-2 md:flex items-center space-x-8 font-semibold text-sm">
					<div className="flex space-x-4 items-center">
						{/* Social Links */}
						<a
							href="https://github.com/RushiPatel9144"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:drop-shadow-[0_0_5px_#f59e0b] transition-transform transform hover:scale-110"
						>
							<img
								src={GithubPhoto}
								alt="GitHub"
								className="w-5 h-5 dark:brightness-0 dark:invert"
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
								className="w-5 h-5 dark:brightness-0 dark:invert"
							/>
						</a>

						<a
							href="mailto:rushi.m.patel@outlook.com"
							className="hover:drop-shadow-[0_0_5px_#f59e0b] hover:text-amber-600 dark:hover:text-amber-200 transition-transform transform hover:scale-110"
						>
							<img
								src={MailPhoto}
								alt="Email"
								className="w-5 h-5 dark:brightness-0 dark:invert"
							/>
						</a>

						<a
							href="https://instagram.com/rushi.404"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:drop-shadow-[0_0_5px_#f472b6] transition-transform transform hover:scale-110"
						>
							<img
								src={InstagramPhoto}
								alt="Instagram"
								className="w-5 h-5 dark:brightness-0 dark:invert"
							/>
						</a>

						{/* CCNA Badge Link */}
						<a
							href="https://www.credly.com/badges/507cb797-c90f-42d7-b59d-c1da20125ce3/linked_in?t=sgpyg8" // Replace with your actual CCNA badge URL
							target="_blank"
							rel="noopener noreferrer"
							className="hover:drop-shadow-[0_0_5px_#34d399] transition-transform transform hover:scale-110"
						>
							<span className="w-fit ml-4 h-8 flex items-center justify-center  font-semibold  border-gray-300 dark:border-white">
								ccna badge
							</span>
						</a>
					</div>

					{/* Navigation Links */}
					{["about", "projects", "blog", "contact"].map((item) => (
						<a
							key={item}
							href={`/#${item.toLowerCase()}`}
							className="hover:drop-shadow-[0_0_5px_#f59e0b] transform hover:scale-110 hover:text-amber-600 dark:hover:text-amber-200 transition-colors duration-200"
						>
							{item}
						</a>
					))}
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-7 h-7 text-black dark:text-white"
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
				<div
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="md:hidden bg-white/30 dark:bg-black/30 backdrop-blur-md px-6 py-4 shadow-lg space-y-4 font-medium text-black dark:text-white"
				>
					{["home", "about", "projects", "blog", "contact"].map(
						(item) => (
							<a
								key={item}
								href={`/#${item.toLowerCase()}`}
								className="block hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
							>
								{item}
							</a>
						)
					)}
					<a
						href="https://www.credly.com/badges/507cb797-c90f-42d7-b59d-c1da20125ce3/linked_in?t=sgpyg8" // Replace with your actual CCNA badge URL
						target="_blank"
						rel="noopener noreferrer"
						className="block hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
					>
						ccna badge
					</a>
					<div className="flex space-x-4 pt-4 border-t border-black/10 dark:border-white/20">
						{/* Socials (Mobile) */}
						<a
							href="https://github.com/RushiPatel9144"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:drop-shadow-[0_0_5px_#f59e0b] transition-transform transform hover:scale-110"
						>
							<img
								src={GithubPhoto}
								alt="GitHub"
								className="w-5 h-5 dark:brightness-0 dark:invert"
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
								className="w-5 h-5 dark:brightness-0 dark:invert"
							/>
						</a>

						<a
							href="mailto:rushi.m.patel@outlook.com"
							className="hover:drop-shadow-[0_0_5px_#f59e0b] transition-transform transform hover:scale-110"
						>
							<img
								src={MailPhoto}
								alt="Email"
								className="w-5 h-5 dark:brightness-0 dark:invert"
							/>
						</a>

						<a
							href="https://instagram.com/rushi.404"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:drop-shadow-[0_0_5px_#f472b6] transition-transform transform hover:scale-110"
						>
							<img
								src={InstagramPhoto}
								alt="Instagram"
								className="w-5 h-5 dark:brightness-0 dark:invert"
							/>
						</a>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
