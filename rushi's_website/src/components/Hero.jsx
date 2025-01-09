/** @format */
import back from "../assets/4.jpg";

const Hero = () => {
	return (
		<section
			id="home"
			className="relative w-full h-screen bg-cover bg-center text-white"
			style={{
				backgroundImage: `url(${back})`, // Reference the imported image here
			}}
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="relative z-10 text-center py-32 px-5">
				<h1 className="text-5xl font-extrabold mb-4 text-shadow-md">
					Hi, I'm Rushi Patel
				</h1>
				<p className="text-lg mb-6">
					Student | Aspiring Developer | Tech Enthusiast
				</p>
				<a
					href="#contact"
					className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white shadow-md transition duration-300 transform hover:scale-105"
				>
					Let's Connect
				</a>
			</div>
		</section>
	);
};

export default Hero;
