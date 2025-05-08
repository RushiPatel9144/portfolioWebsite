/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogData from "../data/blogData.json";
import back from "../assets/14.jpg";

const Blog = () => {
	return (
		<section
			id="blog"
			className="py-20 px-5 relative text-gray-900 overflow-hidden dark:text-gray-100"
			style={{
				backgroundImage: `url(${back})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Soft gradient overlay */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0 dark:bg-gradient-to-t dark:from-black/90"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			></motion.div>

			{/* Overlay for darkening */}
			<motion.div
				className="absolute inset-0 bg-black/10 backdrop-blur-sm z-0 dark:bg-black/40"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			></motion.div>

			{/* Main content */}
			<div className="relative z-10 max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-md dark:text-white">
					Blogs
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{blogData.map((post) => (
						<motion.div
							key={post.id}
							className="relative p-6 rounded-2xl backdrop-blur bg-white/30 text-white shadow-lg transition-all duration-500 transform hover:scale-95 ease-in-out dark:bg-black/30 dark:hover:bg-white/10 hover:bg-white/10 dark:text-white"
							whileHover={{ scale: 0.95 }}
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
								className="text-blue-300 hover:text-blue-500 underline text-sm dark:text-blue-400 dark:hover:text-blue-500"
							>
								Read More
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
