import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the blog ID
import blogData from "../data/blogData.json"; // Import the blog data

const BlogDetails = () => {
	const { id } = useParams(); // Get the blog ID from the URL

	// Find the blog post with the matching ID
	const post = blogData.find((blog) => blog.id === parseInt(id));

	if (!post) {
		return <p>Blog post not found.</p>;
	}

	return (
		<section className="py-20 px-5 bg-gray-50">
			<h2 className="text-4xl font-bold text-blue-500 text-center mb-6">
				{post.title}	
			</h2>
			<p className="text-gray-500 text-center text-sm mb-0">{post.date}</p>
			<div className="max-w-4xl mx-auto text-gray-700" >
				<p>{post.content}</p> {/* Render the full content of the blog post */}
			</div>
		</section>
	);
};

export default BlogDetails;
