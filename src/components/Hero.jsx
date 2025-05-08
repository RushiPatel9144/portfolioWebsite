/** @format */
import back from "../assets/2.jpg";

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
			<div className="relative z-10 text-center py-32 mx-auto px-2 sm:px-5 mt-100">
				<h1 className="text-5xl font-extrabold mb-4 text-shadow-md">
					Hi, I'm
					<span className="duration-300 transform p-2 bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent italic">
						Rushi Patel
					</span>
				</h1>
				<p className="text-lg mb-6">
					Student | Aspiring Computer Engineer | Tech Enthusiast
				</p>
				<a
					href="#footer"
					className="inline-block px-6 py-3 rounded-3xl shadow-md transition duration-300 transform bg-gradient-to-r from-amber-500 via-amber-600 to-pink-500 text-white font-bold hover:scale-110 hover:shadow-xl hover:rotate-3 focus:outline-none"
				>
					Let's Connect
				</a>
			</div>
		</section>
	);
};

export default Hero;
