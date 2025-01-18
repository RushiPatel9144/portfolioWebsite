/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails"; // Make sure to import ProjectDetails
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails"; // Import the BlogDetails component
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorEffect from "./components/CursorEffect"; // Import the CursorEffect component

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Hero />
				<About />
				<Routes>
					{/* Routes for Projects */}
					<Route
						path="/"
						element={<Projects />}
					/>
					<Route
						path="/project/:id"
						element={<ProjectDetails />}
					/>

					{/* Routes for Blog */}
					<Route
						path="/blog"
						element={<Blog />}
					/>
					<Route
						path="/blog/:id"
						element={<BlogDetails />}
					/>
				</Routes>
				<CursorEffect />
				<Contact />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
