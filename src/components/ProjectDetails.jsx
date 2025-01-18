/** @format */

import { useParams } from "react-router-dom";
import projects from "../data/projectData.json"; // Your project data

const ProjectDetails = () => {
	const { id } = useParams(); // Retrieve the 'id' from the URL parameter
	const project = projects.find((p) => p.id === id); // Find the project by id

	if (!project) {
		return <p>Project not found.</p>;
	}

	return (
		<div className="p-10 bg-gray-800"
        >
			<h2 className="text-3xl font-bold">{project.name}</h2>
			<p>{project.details}</p>
			<h3 className="text-xl font-semibold mt-4">Technologies Used:</h3>
			<ul>
				{project.technologies.map((tech, index) => (
					<li key={index}>{tech}</li>
				))}
			</ul>
			<a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				className="text-blue-500 underline mt-4"
			>
				Visit Project
			</a>
		</div>
	);
};

export default ProjectDetails;
