/** @format */
import ProfilePhoto from "../assets/profile.jpg";
import back from "../assets/13.jpg";

const songEmbedLinks = [
	"https://open.spotify.com/embed/track/1rydhdFtKe2CRkiaVb7aGF?utm_source=generator",
	"https://open.spotify.com/embed/track/05kVyNUR9uibHta4jcGTTv?utm_source=generator"
];

const About = () => {
	return (
		<section
			id="about"
			className="relative py-20 px-5 bg-cover bg-center"
			style={{
				background: `url(${back})`,
			}}
		>
			<div className="bg-gray-100 bg-transparent/50 p-8 rounded-3xl shadow-xl max-w-6xl mx-auto backdrop-blur-lg  transition-transform ease-in-out">
				{/* About Me Section */}
				<h2 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-200 text-transparent bg-clip-text text-center mb-12">
					About Me
				</h2>
				<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-12">
					{/* Profile Image */}
					<div className="flex-shrink-0 ">
						<img
							src={ProfilePhoto}
							alt="Profile"
							className="rounded-full w-48 h-48 mx-auto shadow-lg object-cover"
						/>
					</div>
					{/* Description */}
					<div className="text-center md:text-left flex-col">
						<p className="text-lg text-gray-100 justify-center items-center leading-relaxed">
							Hello! I'm 
							<span className="font-semibold">Rushi Patel</span>,
							a CENG student with a passion for technology and
							innovation. I enjoy solving problems, building web
							applications, and learning new technologies. I'm
							constantly exploring ways to enhance my skills and
							create impactful projects.
						</p>
					</div>
				</div>
			</div>

			{/* Currently Jamming Section */}
			<div className="mt-16">
				<div className=" p-8 rounded-3xl  bg-transparent/50 shadow-xl max-w-6xl mx-auto backdrop-blur-md ">
					<h3 className="text-4xl bg-gradient-to-r font-bold from-gray-100 to-gray-200 text-transparent bg-clip-text text-center p-2 mb-8">
						Currently Jamming
					</h3>
					{/* Song Embeds */}
					<div
						className="grid gap-6"
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(300px, 1fr))", // Responsive columns
							gap: "20px", // Space between items
							justifyContent: "center",
						}}
					>
						{songEmbedLinks.map((link, index) => (
							<iframe
								key={index}
								style={{
									borderRadius: "15px",
									border: "none", // Remove default iframe border
									width: "100%",
									height: "232px",
									boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", // Add shadow for each iframe
								}}
								src={link}
								allow="autoplay; encrypted-media"
								loading="eager"
								title={`Song ${index + 1}`}
							></iframe>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
