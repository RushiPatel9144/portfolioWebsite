/** @format */

// components/ScrollProgress.jsx
import { useEffect, useState } from "react";

const ScrollProgress = () => {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = document.documentElement.scrollTop;
			const winHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const scrolled = (scrollTop / winHeight) * 100;
			setScroll(scrolled);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
			<div
				className="h-full bg-gradient-to-r from-teal-400 to-yellow-400 transition-all duration-150"
				style={{ width: `${scroll}%` }}
			/>
		</div>
	);
};

export default ScrollProgress;
