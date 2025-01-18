/** @format */
import back from "../assets/10.jpg";
import projects from "../data/projectData.json"; // Adjust path as necessary

const Projects = () => {


	return (
		<section
			id="projects"
			className=" py-20 px-5 relative w-full h-2/4 bg-cover bg-center text-gray-900"
			style={{
				backgroundImage: `url(${back})`, // Reference the imported image here
			}}
		>
			<h2 className="	text-4xl font-bold text-white text-center  mb-6">
				My Projects
			</h2>

			<div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto blur(1px)">
				{projects.map((project, index) => (
					<div
						key={index}
						className="p-6 backdrop-blur text-gray-100  rounded-2xl shadow-lg bg-white/35 hover:shadow-2xl 
						 hover:bg-transparent/5 transition-opacity transition-colors transition-transform duration-600 hover:border hover:border-white 
						 ease-in-out transform hover:scale-95 group"
					>
						<h3 className="text-xl font-bold mb-2 group-hover:scale-95 transition-transform ease-in">
							{project.name}
						</h3>
						<p className="text-gray-300 mb-4  group-hover:scale-95 transition-transform ease-in">
							{project.description}
						</p>
						<a
							href={project.link}
							className="text-blue-400 hover:text-blue-700 underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Project
						</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
