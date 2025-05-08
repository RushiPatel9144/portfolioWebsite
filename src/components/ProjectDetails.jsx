/** @format */

import { useParams, Link } from "react-router-dom";
import projects from "../data/projectData.json";
import { motion } from "framer-motion";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTopButton from "../components/ScrollToTopButton";

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

	return (
		<>
			<ScrollProgress />
			<ScrollToTopButton />
			<section className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black text-gray-900 dark:text-white px-6 sm:px-20 py-16">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-5xl mx-auto"
				>
					<div className="mb-8">
						<h1 className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">
							{project.name}
						</h1>
						<p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
							{project.description ||
								"A featured project from my portfolio."}
						</p>

						<div className="flex flex-wrap gap-4 mb-4">
							{project.externalLinks?.github && (
								<a
									href={project.externalLinks.github}
									target="_blank"
									rel="noopener noreferrer"
									className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition"
								>
									🔗 GitHub
								</a>
							)}
							{project.externalLinks?.demo && (
								<a
									href={project.externalLinks.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="px-4 py-2 bg-blue-200 dark:bg-blue-700 text-black dark:text-white rounded-lg font-medium hover:bg-blue-300 dark:hover:bg-blue-600 transition"
								>
									🌐 Live Demo
								</a>
							)}
							{project.externalLinks?.video && (
								<a
									href={project.externalLinks.video}
									target="_blank"
									rel="noopener noreferrer"
									className="px-4 py-2 bg-red-200 dark:bg-red-700 text-black dark:text-white rounded-lg font-medium hover:bg-red-300 dark:hover:bg-red-600 transition"
								>
									🎥 Video Demo
								</a>
							)}
						</div>
					</div>

					{/* Render all images if available */}
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

					<p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 mb-6">
						{project.details}
					</p>

					{project.features && project.features.length > 0 && (
						<>
							<h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-2">
								Features
							</h3>
							<ul className="list-disc list-inside mb-6 text-gray-800 dark:text-gray-300">
								{project.features.map((feature, i) => (
									<li key={i}>{feature}</li>
								))}
							</ul>
						</>
					)}

					<h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-300 mb-3">
						Tech Stack
					</h3>
					<div className="flex flex-wrap gap-2 mb-10">
						{project.technologies.map((tech, i) => (
							<span
								key={i}
								className="bg-yellow-200 dark:bg-yellow-700 text-black dark:text-white px-3 py-1 rounded-full text-sm font-medium"
							>
								{tech}
							</span>
						))}
					</div>

					{project.lessons && project.lessons.length > 0 && (
						<>
							<h3 className="text-xl font-semibold text-green-600 dark:text-green-300 mb-2">
								Lessons Learned
							</h3>
							<ul className="list-disc list-inside mb-10 text-gray-800 dark:text-gray-300">
								{project.lessons.map((lesson, i) => (
									<li key={i}>{lesson}</li>
								))}
							</ul>
						</>
					)}

					<Link
						to="/#projects"
						className="text-teal-500 underline text-base hover:text-teal-300 transition-colors duration-200"
					>
						← Back to Projects
					</Link>
				</motion.div>
			</section>
		</>
	);
};

export default ProjectDetails;
