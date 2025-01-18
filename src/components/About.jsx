/** @format */
import ProfilePhoto from "../assets/profile.jpg";
const songEmbedLink =
	"https://open.spotify.com/embed/track/4Jle0Cjj88YkM7jbAjiFjf?utm_source=generator"; // Replace with your actual track ID

const About = () => {
	return (
		<section
			id="about"
			className="py-20 px-5 bg-gradient-to-r from-gray-100 to-amber-100"
		>
			<h2 className="text-4xl font-bold bg-gradient-to-r from-amber-500 via-amber-600 to-pink-600 text-transparent bg-clip-text text-center mb-6">
				About Me
			</h2>
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-x-12">
				<div className="w-full md:w-1/2 mb-6 md:mb-0">
					<img
						src={ProfilePhoto}
						alt="Profile"
						className=" border border-amber-500 rounded-full w-48 h-48 mx-auto shadow-lg object-cover"
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

			<h2 className="text-2xl font-semibold bg-gradient-to-r from-amber-500 via-amber-600 to-pink-500 text-transparent bg-clip-text mb-4 text-center mt-12 ">
				Current Favorite Song
			</h2>
			<iframe
				src={songEmbedLink}
				width="80%"
				height="360"
				allow="encrypted-media"
				title="Favorite Song"
				className="mx-auto"
			></iframe>
		</section>
	);
};

export default About;
