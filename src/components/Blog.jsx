import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import blogData from "../data/blogData.json"; // Import the blog data from the JSON file

const Blog = () => {
	return (
		<section id="blog" className="py-20 px-5 bg-gray-50">
			<h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Articles</h2>
			<div className="max-w-4xl mx-auto">
				{blogData.map((post, index) => (
					<div key={index} className="border-b py-6 last:border-none">
						<h3 className="text-2xl font-semibold mb-2 text-gray-700">
							{post.title}
						</h3>
						<p className="text-gray-500 text-sm mb-4">{post.date}</p>
						<Link
							to={`/blog/${post.id}`} // Use Link to navigate to individual blog post
							className="text-blue-500 hover:text-blue-600 underline"
						>
							Read More
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default Blog;
