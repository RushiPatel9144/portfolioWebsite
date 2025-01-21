/** @format */

import React from "react";
import back from "../assets/4.jpg";

const FavoriteSong = () => {
	const songEmbedLinks = [
		"https://open.spotify.com/embed/track/7eqoqGkKwgOaWNNHx90uEZ?utm_source=generator&theme=0",
		"https://open.spotify.com/embed/track/0mO6oS60RST2sWmN2FKknP?utm_source=generator",
		"https://open.spotify.com/embed/track/1rydhdFtKe2CRkiaVb7aGF?utm_source=generator",
		"https://open.spotify.com/embed/track/4PXuZYWhkyGXQzfSRy2PW1?utm_source=generator",
		"https://open.spotify.com/embed/track/2X485T9Z5Ly0xyaghN73ed?utm_source=generator",
		"https://open.spotify.com/embed/track/6pWgRkpqVfxnj3WuIcJ7WP?utm_source=generator",
	];

	return (
		<div
			className="bg-gray-100 p-6 shadow-lg bg-cover bg-center text-center"
			style={{
				backgroundImage: `url(${back})`, // Reference the imported image here
			}}
		>
			<div
				className="backdrop-blur-xl p-8 rounded-3xl shadow-xl max-w-6xl mx-auto hover:scale-95 transition-all ease-in"
				style={{
					boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
				}}
			>
				<h3 className="text-4xl font-semibold bg-gradient-to-r from-gray-100 to-gray-200 text-transparent bg-clip-text mb-6">
					Currently Jamming
				</h3>

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
								height: "352px",
								boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", // Add shadow for each iframe
							}}
							src={link}
							allow="autoplay; encrypted-media"
							loading="lazy"
						></iframe>
					))}
				</div>
			</div>
		</div>
	);
};

export default FavoriteSong;
