/** @format */
import React from "react";
import ProfilePhoto from "../assets/profile.jpg";
import back from "../assets/13.jpg";
import { motion } from "framer-motion";

const songEmbedLinks = [
	"https://open.spotify.com/embed/track/1rydhdFtKe2CRkiaVb7aGF?utm_source=generator",
	"https://open.spotify.com/embed/track/05kVyNUR9uibHta4jcGTTv?utm_source=generator",
];

const About = () => {
	return (
		<section
			id="about"
			className="relative py-20 px-5 bg-cover bg-center"
			style={{ background: `url(${back})` }}
		>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="bg-gray-100 dark:bg-black/40 bg-transparent/10 p-8 rounded-3xl shadow-xl max-w-6xl mx-auto backdrop-blur-lg transition-transform ease-in-out"
			>
				{/* About Me Section */}
				<h2 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-200 dark:to-gray-500 text-transparent bg-clip-text text-center mb-12">
					About Me
				</h2>

				<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-12">
					{/* Profile Image */}
					<div className="flex-shrink-0">
						<img
							src={ProfilePhoto}
							alt="Profile"
							className="rounded-full w-48 h-48 mx-auto shadow-lg object-cover"
						/>
					</div>

					{/* Description */}
					<div className="text-center md:text-left flex-col">
						<p className="text-lg text-gray-900 dark:text-gray-200 leading-relaxed">
							Hello! I'm{" "}
							<span className="font-semibold">Rushi Patel</span>,
							a CENG student with a passion for technology and
							innovation. I enjoy solving problems, building web
							applications, and learning new technologies. I'm
							constantly exploring ways to enhance my skills and
							create impactful projects.
						</p>
					</div>
				</div>
			</motion.div>

			{/* Currently Jamming Section */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				className="mt-16"
			>
				<div className="p-8 rounded-3xl bg-transparent/50 dark:bg-black/40 shadow-xl max-w-6xl mx-auto backdrop-blur-md">
					<h3 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-200 dark:to-gray-500 text-transparent bg-clip-text text-center p-2 mb-8">
						Currently Jamming
					</h3>

					{/* Song Embeds */}
					<div
						className="grid gap-6"
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(300px, 1fr))",
							justifyContent: "center",
						}}
					>
						{songEmbedLinks.map((link, index) => (
							<iframe
								key={index}
								style={{
									borderRadius: "15px",
									border: "none",
									width: "100%",
									height: "232px",
									boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
								}}
								src={link}
								allow="autoplay; encrypted-media"
								loading="eager"
								title={`Song ${index + 1}`}
							></iframe>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
