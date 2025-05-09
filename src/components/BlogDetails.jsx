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
		<section className="min-h-screen bg-white dark:bg-gray-900 py-20 px-6">
			<div className="max-w-4xl mx-auto">
				<Link
					to="/#blog"
					className="text-blue-600 dark:text-blue-400 text-sm mb-6 inline-block hover:underline"
				>
					← Back to Articles
				</Link>

				<header className="mb-12 text-center">
					<h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3">
						{post.title}
					</h1>
					<p className="text-gray-500 dark:text-gray-400 text-sm">
						{post.date}
					</p>
				</header>

				<article className="prose prose-lg dark:prose-invert prose-gray max-w-none">
					{typeof post.content === "string" ? (
						<p>{post.content}</p>
					) : (
						post.content.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))
					)}
				</article>
			</div>
		</section>
	);
};

export default BlogDetails;
