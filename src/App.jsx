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
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
	return (
		<Router>
			<div>
				<ScrollToTop />
				<CursorEffect />
				{/* <ScrollToTop /> */}
				<Navbar />
				<ScrollProgress />
				<ScrollToTopButton />
				<Routes>
					{/* Home Page: Hero, About, Projects, Blog */}
					<Route
						path="/"
						element={
							<>
								<Hero />
								<About />
								<Projects />
								<Blog />
								<Contact />
								<Footer />
							</>
						}
					/>

					{/* Project Details Page */}
					<Route
						path="/project/:id"
						element={<ProjectDetails />}
					/>

					{/* Blog Details Page */}
					<Route
						path="/blog/:id"
						element={<BlogDetails />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
