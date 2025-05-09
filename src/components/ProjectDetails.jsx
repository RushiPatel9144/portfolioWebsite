/** @format */

import { useParams, Link } from "react-router-dom";
import projects from "../data/projectData.json";
import { motion } from "framer-motion";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollToTop from "./ScrollToTop";

const ProjectDetails = () => {
	const { id } = useParams();
	const project = projects.find((p) => p.id === id);

	if (!project) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
				<p className="text-xl">🚫 Project not found.</p>
			</div>
		);
	}

	const otherProjects = projects.filter((p) => p.id !== id);

	return (
		<>
			<ScrollToTop />
			<ScrollProgress />
			<ScrollToTopButton />

			<section className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black text-gray-900 dark:text-white px-4 sm:px-6 lg:px-10 py-20">
				{/* Mobile TOC */}
				<div className="block lg:hidden mb-6">
					<details className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
						<summary className="font-medium cursor-pointer">
							🔍 Jump to Section
						</summary>
						<ul className="mt-2 space-y-2 text-blue-500 dark:text-blue-300">
							<li>
								<a href="#details">Details</a>
							</li>
							<li>
								<a href="#features">Features</a>
							</li>
							<li>
								<a href="#tech">Tech Stack</a>
							</li>
							<li>
								<a href="#lessons">Lessons</a>
							</li>
						</ul>
					</details>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10 max-w-7xl mx-auto">
					{/* Sidebar */}
					<aside className="space-y-10 sticky top-24 self-start hidden lg:block">
						<nav>
							<h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">
								Jump to
							</h2>
							<ul className="space-y-2 text-sm text-blue-500 dark:text-blue-300">
								<li>
									<a href="#details">Details</a>
								</li>
								<li>
									<a href="#features">Features</a>
								</li>
								<li>
									<a href="#tech">Tech Stack</a>
								</li>
								<li>
									<a href="#lessons">Lessons</a>
								</li>
							</ul>
						</nav>

						<div className="max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
							<h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">
								Other Projects
							</h2>
							<ul className="space-y-1">
								{otherProjects.map((proj) => (
									<li key={proj.id}>
										<Link
											to={`/project/${proj.id}`}
											className="text-sm text-teal-600 dark:text-teal-300 hover:underline"
										>
											{proj.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</aside>

					{/* Main Content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className="mb-8">
							<h1 className="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">
								{project.name}
							</h1>

							{/* External Links */}		
							<div className="flex flex-wrap gap-4 mb-4">
								{project.links?.github && (
									<a
										href={project.links.github}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition"
									>
										🔗 GitHub
									</a>
								)}
								{project.links?.documentation && (
									<a
										href={project.links.documentation}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 py-2 bg-blue-200 dark:bg-blue-700 text-black dark:text-white rounded-lg font-medium hover:bg-blue-300 dark:hover:bg-blue-600 transition"
									>
										🌐 Hardware Repo
									</a>
								)}
								{project.links?.video && (
									<a
										href={project.links.video}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 py-2 bg-red-200 dark:bg-red-700 text-black dark:text-white rounded-lg font-medium hover:bg-red-300 dark:hover:bg-red-600 transition"
									>
										🎥 Video Demo
									</a>
								)}
							</div>

							<p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
								{project.description ||
									"A featured project from my portfolio."}
							</p>
						</div>

						{/* Images */}
						{project.images && project.images.length > 0 && (
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
								{project.images.map((img, index) => (
									<div
										key={index}
										className="rounded-lg overflow-hidden shadow-lg"
									>
										<img
											src={img}
											alt={`${project.name} preview ${
												index + 1
											}`}
											className="w-full h-auto object-cover"
										/>
									</div>
								))}
							</div>
						)}

						{/* Details */}
						<div
							id="details"
							className="mb-6 scroll-mt-24"
						>
							<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
								Details
							</h3>
							<p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
								{project.details}
							</p>
						</div>

						{/* Features */}
						{project.features && project.features.length > 0 && (
							<div
								id="features"
								className="mb-6 scroll-mt-24"
							>
								<h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-2">
									Features
								</h3>
								<ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
									{project.features.map((feature, i) => (
										<li key={i}>{feature}</li>
									))}
								</ul>
							</div>
						)}

						{/* Tech Stack */}
						<div
							id="tech"
							className="mb-6 scroll-mt-24"
						>
							<h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-300 mb-2">
								Tech Stack
							</h3>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech, i) => (
									<span
										key={i}
										className="bg-yellow-200 dark:bg-yellow-700 text-black dark:text-white px-3 py-1 rounded-full text-sm font-medium"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Lessons */}
						{project.lessons && project.lessons.length > 0 && (
							<div
								id="lessons"
								className="mb-10 scroll-mt-24"
							>
								<h3 className="text-xl font-semibold text-green-600 dark:text-green-300 mb-2">
									Lessons Learned
								</h3>
								<ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
									{project.lessons.map((lesson, i) => (
										<li key={i}>{lesson}</li>
									))}
								</ul>
							</div>
						)}

						<Link
							to="/#"
							className="text-teal-500 underline text-base hover:text-teal-300 transition-colors duration-200"
						>
							← Back
						</Link>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default ProjectDetails;
