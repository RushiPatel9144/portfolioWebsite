/** @format */

import React from "react";
import back from "../assets/3.jpg";

const FavoriteSong = () => {
	const songEmbedLink =
		"https://open.spotify.com/embed/track/4Jle0Cjj88YkM7jbAjiFjf?utm_source=generator"; // Replace with your actual track ID
	const songLink = "https://open.spotify.com/track/4Jle0Cjj88YkM7jbAjiFjf"; // Link to open the song in Spotify

	return (
		<div
			className="bg-gray-100 p-6 shadow-lg bg-cover bg-center text-center"
			style={{
				backgroundImage: `url(${back})`, // Reference the imported image here
			}}
		>
			<h3 className="text-4xl font-semibold bg-gradient-to-r from-green-800 to-gray-800 text-transparent bg-clip-text mb-4">
				Currently Jamming
			</h3>
			

			<p className="mt-4">
				<a
					href={songLink}
					target="_blank"
					rel="noopener noreferrer"
					className=" text-green-600 hover:underline"
				>
					Listen on Spotify
				</a>
			</p>
		</div>
	);
};

export default FavoriteSong;
