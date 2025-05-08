/** @format */

import React from "react";
import back from "../assets/2.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<section
			id="home"
			className="relative w-full h-screen bg-cover bg-center text-white dark:text-white"
			style={{
				backgroundImage: `url(${back})`,
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/60 dark:bg-black/80"></div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.5 }}
				className="relative z-10 text-center py-32 px-2 sm:px-5"
			>
				<div className="p-2">
					<h1 className="text-5xl font-extrabold mb-4 text-shadow-md dark:text-white">
						Hi, I'm
						<span className="duration-300 transform p-2 hover:drop-shadow-[0_0_5px_#f59e0b] bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent italic">
							Rushi Patel
						</span>
					</h1>
				</div>

				<TypeAnimation
					sequence={[
						"Student",
						1500,
						"Aspiring Computer Engineer",
						1500,
						"Tech Enthusiast",
						1500,
						"Creative Problem Solver",
						1200,
					]}
					wrapper="p"
					speed={75}
					className="text-lg mb-6 text-white dark:text-white"
					repeat={3}
				/>

				<a
					href="#footer"
					className="inline-block px-6 py-3 rounded-3xl shadow-md transition duration-300 transform bg-gradient-to-r from-amber-500 via-amber-600 to-pink-500 text-white font-bold hover:scale-110 hover:shadow-xl hover:rotate-3 focus:outline-none"
				>
					Let's Connect
				</a>
			</motion.div>
		</section>
	);
};

export default Hero;
