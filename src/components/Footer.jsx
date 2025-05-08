/** @format */

import React, { useEffect, useRef, useState } from "react";
import back from "../assets/13.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Footer = () => {
	const footerRef = useRef(null);
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					setHasAnimated(true);
				}
			},
			{ threshold: 0.5 }
		);

		if (footerRef.current) observer.observe(footerRef.current);
		return () => observer.disconnect();
	}, [hasAnimated]);

	return (
		<section>
			<footer
				id="footer"
				ref={footerRef}
				className="relative bg-black text-white py-4 text-center dark:text-gray-100"
			>
				{/* Optional translucent overlay */}
				<div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-0 dark:bg-black/40"></div>

				<div className="relative z-10">
					{/* Bhagavad Gita Quote */}
					<motion.p
						initial={{ scale: 0.8, opacity: 0 }}
						animate={hasAnimated ? { scale: 1.05, opacity: 1 } : {}}
						transition={{ duration: 1 }}
						className="text-sm mt-2 italic dark:text-gray-300"
					>
						<span className="block text-2xl font-bold text-yellow-500 glow-text">
							कर्मण्येवाधिकारस्ते मा फलेषु कदाचन
						</span>
						<span className="block text-2xl font-bold text-yellow-500 glow-text">
							मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि
						</span>

						<TypeAnimation
							sequence={[
								"You have the right to perform your actions, but you are not entitled to the fruits of your actions.",
								1500,
								"Never consider yourself to be the cause of the results of your actions, nor should you be attached to inaction.",
							]}
							wrapper="span"
							speed={50}
							className="block mt-2 mx-4 text-lg"
							repeat={0}
						/>

						<span className="block text-sm mt-2">
							– Krishna, Bhagavad Gita Ch 2 Verse 47
						</span>
					</motion.p>

					{/* Social Links */}
					<div className="flex justify-center space-x-4 mt-24">
						<a
							href="https://github.com/RushiPatel9144"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-200 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-300"
						>
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/rushipa"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-200 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-300"
						>
							LinkedIn
						</a>
						<a
							href="mailto:rushi.m.patel@outlook.com"
							className="text-gray-200 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-300"
						>
							Email
						</a>
						<a
							href="https://www.instagram.com/rushi.404"
							className="text-gray-200 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-300"
						>
							Instagram
						</a>
					</div>

					<p className="text-sm">
						&copy; {new Date().getFullYear()} Rushi Patel. All
						rights reserved.
					</p>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
