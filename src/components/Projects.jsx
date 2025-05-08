/** @format */

import { Link } from "react-router-dom";
import projects from "../data/projectData.json"; // Your project data
import back from "../assets/15.jpg";

const Projects = () => {
	return (
		<section
			id="projects"
			className="py-20 px-5 relative bg-cover bg-center text-white"
			style={{
				backgroundImage: `url(${back})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>	{/* Overlay for darkening */}
			<div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-0"></div>
			<h2 className="text-4xl font-bold text-center mb-12  tracking-wide drop-shadow-xl">
				My Projects
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
				{projects.map((project) => (
					<div
						key={project.id}
						className="p-8 backdrop-blur-xl text-white rounded-3xl shadow-2xl bg-white/20 hover:bg-transparent/30 transition-all duration-500 transform hover:scale-105 group"
					>
						<h3 className="text-2xl font-semibold mb-4 text-center text-indigo-100 group-hover:text-amber-300 transition-all ease-in-out">
							{project.name}
						</h3>
						<p className="text-gray-200 text-center text-sm mb-6 opacity-80 group-hover:opacity-100 transition-all ease-in-out">
							{project.description}
						</p>
						<div className="flex justify-center">
							<Link
								to={`/project/${project.id}`} // Use dynamic routing based on the project id
								className="text-lg text-blue-400 hover:text-blue-600 underline group-hover:text-amber-200 transition-all ease-in-out"
							>
								View Project
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
