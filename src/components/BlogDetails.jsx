/** @format */

import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../data/blogData.json";

const BlogDetails = () => {
	const { id } = useParams();
	const post = blogData.find((blog) => blog.id === id);

	if (!post) {
		return (
			<section className="py-20 px-5 text-center">
				<h2 className="text-2xl font-bold text-red-500 mb-4">
					Blog Post Not Found
				</h2>
				<Link
					to="/#blog"
					className="text-blue-500 hover:underline"
				>
					← Back to Articles
				</Link>
			</section>
		);
	}

	return (
		<section className="py-20 px-5 bg-white min-h-screen">
			<div className="max-w-4xl mx-auto">
				<Link
					to="/#blog"
					className="text-blue-500 hover:underline text-sm mb-4 inline-block"
				>
					← Back to Articles
				</Link>

				<h1 className="text-4xl font-bold text-gray-900 mb-4">
					{post.title}
				</h1>
				<p className="text-gray-500 text-sm mb-8">{post.date}</p>

				<div className="prose prose-lg prose-indigo max-w-none text-gray-800">
					{typeof post.content === "string" ? (
						<p>{post.content}</p>
					) : (
						post.content.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))
					)}
				</div>
			</div>
		</section>
	);
};

export default BlogDetails;
