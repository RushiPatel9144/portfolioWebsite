/** @format */

import React from "react";

const ResumeDownload = () => {
	return (
		<section
			id="resume"
			className="max-w-6xl justify-center relative mx-auto  mt-5 py-6  bg-transparent rounded-2xl bg-gradient-to-r from-[#ffffff33] via-[#00000044] to-[#fbbf2433] backdrop-blur-lg shadow-xl shadow-[#57545644]"
		>
			<div className="container mx-auto px-6 text-center">
				{/* Title */}
				<h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
					Download My Resume
				</h2>
                

				{/* Subtitle */}
				<p className="text-lg text-gray-700 dark:text-gray-300">
					Click the button below to download my resume in PDF format.
				</p>

				{/* Glassmorphic Effect Container */}
				<div className=" inline-block p-3  ">
					{/* Download Button */}
					<a
						href="/RushiPatel_Resume_NET.pdf" // Replace with the correct path
						download
						className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-[#c316a2] to-[#fbbf24] text-white rounded-md shadow-md hover:bg-blue-600 transition"
					>
						Download Resume
					</a>
				</div>
			</div>
		</section>
	);
};

export default ResumeDownload;
