/** @format */

import React, { useState } from "react";
import ProfilePhoto from "../assets/profile.jpg";
import back from "../assets/13.jpg";
import { motion } from "framer-motion";
import ResumeDownload from "./ResumeDownload";

const songEmbedLinks = [
	"https://open.spotify.com/embed/track/1rydhdFtKe2CRkiaVb7aGF?utm_source=generator",
	"https://open.spotify.com/embed/track/05kVyNUR9uibHta4jcGTTv?utm_source=generator",
];

const About = () => {
	const [showFullText, setShowFullText] = useState(false);

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
				<h2 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-200 dark:to-gray-500 text-transparent bg-clip-text text-center mb-12">
					About Me
				</h2>

				<div className="flex flex-col items-center justify-center text-center space-y-8">
					<img
						src={ProfilePhoto}
						alt="Profile"
						className="rounded-full w-48 h-48 mx-auto shadow-lg object-cover"
					/>

					<div className="flex-col">
						{/* Full text on md+ screens */}
						<p className="hidden md:block text-lg text-gray-100 dark:text-gray-200 leading-relaxed">
							Hello! I'm{" "}
							<span className="font-semibold">Rushi Patel</span>,
							a Computer Engineering (CENG) student with a strong
							foundation in networking, systems, and web
							development. As a certified CCNA professional, I
							thrive on building innovative tech solutions — from
							smart IoT systems and responsive websites to secure
							network labs. I love combining technical precision
							with creative design to craft projects that are both
							functional and meaningful. I’m currently deepening
							my full-stack development skills and exploring
							modern tools like React, Firebase, and Framer Motion
							to elevate user experiences.
							<br />
							<br />
							Outside of tech, I value growth, creativity, and
							staying focused. I’m all about spiritual
							exploration, music, and keeping a routine that
							grounds me. I’ve moved around a lot, which taught me
							independence and gave me perspective. Living with
							purpose and learning every day is my vibe.
						</p>

						{/* Truncated + Expandable text on small screens */}
						<div className="md:hidden text-lg text-gray-100 dark:text-gray-200 leading-relaxed">
							{showFullText ? (
								<>
									<p>
										Hello! I'm{" "}
										<span className="font-semibold">
											Rushi Patel
										</span>
										, a Computer Engineering (CENG) student
										with a strong foundation in networking,
										systems, and web development. As a
										certified CCNA professional, I thrive on
										building innovative tech solutions —
										from smart IoT systems and responsive
										websites to secure network labs. I love
										combining technical precision with
										creative design to craft projects that
										are both functional and meaningful. I’m
										currently deepening my full-stack
										development skills and exploring modern
										tools like React, Firebase, and Framer
										Motion to elevate user experiences.
										<br />
										<br />
										Outside of tech, I value growth,
										creativity, and staying focused. I’m all
										about spiritual exploration, music, and
										keeping a routine that grounds me. I’ve
										moved around a lot, which taught me
										independence and gave me perspective.
										Living with purpose and learning every
										day is my vibe.
									</p>
									<button
										onClick={() => setShowFullText(false)}
										className="mt-3 text-c316a2 underline"
									>
										Show Less
									</button>
								</>
							) : (
								<>
									<p>
										Hello! I'm{" "}
										<span className="font-semibold">
											Rushi Patel
										</span>
										, a Computer Engineering (CENG)
										student...{" "}
									</p>
									<button
										onClick={() => setShowFullText(true)}
										className="mt-2 text-c316a2 underline"
									>
										Read More
									</button>
								</>
							)}
						</div>

						{/* Chess Part - always visible */}
						<p className="text-lg text-gray-100 dark:text-gray-200 leading-relaxed mt-6">
							Want to play chess? Challenge me — we might play!
							<br />
							<span className="font-semibold text-yellow-300 underline hover:text-green-300">
								You can find me on Chess.com -{" "}
								<a
									href="https://www.chess.com/member/rushi2211"
									className="text-c316a2"
									target="_blank"
								>
									rushi2211
								</a>
							</span>
							.
						</p>
					</div>
				</div>
			</motion.div>

			{/* Currently Jamming */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				className="mt-12"
			>
				<div className="p-6 rounded-2xl bg-transparent/50 dark:bg-black/40 shadow-lg max-w-5xl mx-auto backdrop-blur-md">
					<h3 className="text-3xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-200 dark:to-gray-500 text-transparent bg-clip-text text-center p-2 mb-6">
						Currently Jamming
					</h3>

					<div
						className="grid gap-4"
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(280px, 1fr))",
							justifyContent: "center",
						}}
					>
						{songEmbedLinks.map((link, index) => (
							<iframe
								key={index}
								style={{
									borderRadius: "12px",
									border: "none",
									width: "100%",
									height: "180px",
									boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
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
						
			<ResumeDownload />
		</section>
	);
};

export default About;
