/** @format */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projectData.json";
import back from "../assets/15.jpg";

const Projects = () => {
	const [showAll, setShowAll] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const visibleProjects = showAll
		? projects
		: isMobile
		? projects.slice(0, 3)
		: projects.slice(0, 6);

	return (
		<section
			id="projects"
			className="py-20 px-5 relative bg-cover bg-center text-white"
			style={{
				backgroundImage: `url(${back})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/10 dark:bg-black/40 backdrop-blur-sm z-0"></div>

			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="relative z-10 text-4xl font-bold text-center mb-12 tracking-wide drop-shadow-xl text-gray-100 dark:text-white"
			>
				My Projects
			</motion.h2>

			<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
				{visibleProjects.map((project, index) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.2, delay: index * 0.1 }}
						whileHover={{ scale: 0.95 }}
						className="p-8 backdrop-blur-xl text-white rounded-3xl shadow-2xl bg-white/20 dark:bg-black/30 hover:bg-white/30 border group dark:hover:bg-white/10 duration-500"
					>
						<div>
							<h3 className="text-2xl font-semibold mb-4 text-center text-indigo-100">
								{project.name}
							</h3>
							<p className="text-gray-200 text-center text-sm mb-6 opacity-80">
								{project.description}
							</p>
							<div className="flex justify-center">
								<Link
									to={`/project/${project.id}`}
									className="text-lg text-blue-300 hover:text-blue-500 dark:hover:text-amber-300 underline"
								>
									View Project
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			{/* Show More / Less */}
			{(isMobile && projects.length > 3) ||
			(!isMobile && projects.length > 6) ? (
				<div className="relative z-10 mt-8 text-center">
					<button
						onClick={() => setShowAll(!showAll)}
						className="text-c316a2 hover:text-white underline text-lg"
					>
						{showAll ? "Show Less" : "Show More"}
					</button>
				</div>
			) : null}
		</section>
	);
};

export default Projects;
