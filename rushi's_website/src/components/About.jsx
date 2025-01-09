/** @format */
import ProfilePhoto from "../assets/1.jpg";
const About = () => {
	return (
		<section
			id="about"
			className="py-20 px-5 bg-gray-100"
		>
			<h2 className="text-4xl font-bold text-blue-500 text-center mb-6">
				About Me
			</h2>
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-x-12">
				<div className="w-full md:w-1/2 mb-6 md:mb-0">
					<img
						src={ProfilePhoto}
						alt="Profile"
						className="rounded-full w-48 h-48 mx-auto shadow-lg"
					/>
				</div>
				<div className="w-full md:w-1/2">
					<p className="text-lg text-gray-700">
						Hello! I'm Rushi Patel, an IT student with a passion for
						technology and innovation. I enjoy solving problems,
						building web applications, and learning new
						technologies. I'm constantly exploring ways to enhance
						my skills and create impactful projects.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
