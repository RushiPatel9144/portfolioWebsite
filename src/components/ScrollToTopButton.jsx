/** @format */

// components/ScrollToTopButton.jsx
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) setVisible(true);
			else setVisible(false);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (!visible) return null;

	return (
		<button
			onClick={scrollToTop}
			className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white shadow-lg transition duration-300"
			aria-label="Scroll to top"
		>
			<ArrowUp size={20} />
		</button>
	);
};

export default ScrollToTopButton;
