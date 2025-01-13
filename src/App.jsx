/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails"; // Import the BlogDetails component
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Hero />
				<About />
				<Projects />
				<Routes>
					
				</Routes>

				<Contact />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
