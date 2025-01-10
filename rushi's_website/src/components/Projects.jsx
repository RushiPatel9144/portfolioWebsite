/** @format */
import back from "../assets/2.jpg";
const Projects = () => {
	const projects = [
		{
			name: "Smart Indoor Parking System",
			description:
				"An IoT-enabled system for efficient parking management.",
			link: "#contact",
		},
		{
			name: "Portfolio Website",
			description:
				"A personal portfolio built using React and Tailwind CSS.",
			link: "#", //  add link heher
		},
		{
			name: "Security System",
			description: "A system to authenticate users entering parking lot.",
			link: "#",
		},
	];

	return (
		<section
			id="projects"
			className="py-20 px-5 relative w-full min-h-1.5 bg-cover bg-center text-white"
			style={{
				backgroundImage: `url(${back})`, // Reference the imported image here
			}}
		>
			<h2 className="text-4xl font-bold text-white-500 text-center mb-6">
				My Projects
			</h2>

			<div className="grid grid-cols-1 backdrop-blur sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto blur(1px)">
				{projects.map((project, index) => (
					<div
						key={index}
						className="p-6  text-white  rounded-2xl shadow-lg bg-white/35 hover:shadow-2xl 
						 hover:bg-transparent/5 transition-opacity transition-colors transition-transform duration-600 hover:border hover:border-amber-500 
						 ease-in-out transform hover:scale-95 group"
					>
						<h3 className="text-xl font-bold mb-2 ">
							{project.name}
						</h3>
						<p className="text-gray-100 mb-4  group-hover:scale-95 transition-transform ease-in">
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
