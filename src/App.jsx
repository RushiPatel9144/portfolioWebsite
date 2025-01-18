/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorEffect from "./components/CursorEffect";

function App() {
	return (
		<Router>
			<div>
				<CursorEffect />
				<Navbar />
				<Hero />
				<About />

				{/* Routes for Projects and Blog */}
				<Routes>
					{/* Main Page Showing Projects and Blog (Always Visible) */}
					<Route
						path="/"
						element={
							<>
								<Projects />
								<Blog />
							</>
						}
					/>

					{/* Specific Project Details */}
					<Route
						path="/project/:id"
						element={
							<>
								<ProjectDetails />{" "}
								{/* Keep Projects section visible */}
								<Blog />{" "}
								{/* Replace Blog section with BlogDetails */}
							</>
						}
					/>

					{/* Specific Blog Details */}
					<Route
						path="/blog/:id"
						element={
							<>
								<Projects />{" "}
								{/* Keep Projects section visible */}
								<BlogDetails />{" "}
								{/* Replace Blog section with BlogDetails */}
							</>
						}
					/>
				</Routes>

				<Contact />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
