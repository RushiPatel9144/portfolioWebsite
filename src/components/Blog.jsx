/** @format */

import React from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blogData.json";
import back from "../assets/14.jpg";

const Blog = () => {
	return (
		<section
			id="blog"
			className="py-20 px-5 relative text-gray-900 overflow-hidden"
			style={{
				backgroundImage: `url(${back})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Soft gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>
			{/* Overlay for darkening */}
			<div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-0"></div>
			<div className="relative z-10 max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-md">
					Blogs
				</h2>

				<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{blogData.map((post) => (
						<div
							key={post.id}
							className="relative p-6 rounded-2xl backdrop-blur bg-white/20 text-white shadow-lg transition-all duration-500 transform  ease-in-out peer-hover:drop-shadow-[0_0_5px_#f59e0b]"
						>
							<h3 className="text-xl font-bold mb-2">
								{post.title}
							</h3>
							<p className="text-white/70 text-sm mb-4">
								{post.date}
							</p>
							{post.content && (
								<p className="text-white/80 mb-4 text-sm line-clamp-3">
									{post.content}
								</p>
							)}
							<Link
								to={`/blog/${post.id}`}
								className="peer text-blue-300 hover:text-blue-500 underline text-sm"
							>
								Read More
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
