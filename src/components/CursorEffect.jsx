/** @format */

import { useEffect, useState } from "react";

const CursorEffect = () => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [isScrolling, setIsScrolling] = useState(false); // Track if scrolling is happening
	const [isCursorVisible, setIsCursorVisible] = useState(true); // Track cursor visibility
	const [isClicked, setIsClicked] = useState(false); // Track if the cursor was clicked

	useEffect(() => {
		let scrollTimeout;
		let moveTimeout;

		// Capture the mouse move event to track cursor position
		const handleMouseMove = (event) => {
			const newPosition = {
				x: event.clientX + window.scrollX,
				y: event.clientY + window.scrollY,
			};
			setCursorPosition(newPosition);

			// If mouse moves, show the cursor ring
			if (!isScrolling) {
				setIsCursorVisible(true); // Show cursor ring
			} else {
				// Reset the timeout to hide the cursor again after scrolling ends
				clearTimeout(moveTimeout);
				moveTimeout = setTimeout(() => {
					setIsCursorVisible(false); // Hide cursor after scroll ends
				}, 100); // Delay to ensure it hides after the scrolling stops
			}
		};

		// Detect scrolling
		const handleScroll = () => {
			setIsScrolling(true); // Scrolling is happening
			setIsCursorVisible(false); // Hide cursor ring during scrolling

			// Clear previous timeout and set a new one to detect when scrolling stops
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(() => {
				setIsScrolling(false); // Scrolling stopped
			}, 150); // Delay to determine when scrolling has stopped
		};

		// Handle mouse click event
		const handleClick = () => {
			setIsClicked(true);
			// Reset the click state after a short period to create an animation effect
			setTimeout(() => {
				setIsClicked(false);
			}, 100); // Adjust timing for the ring to return to its normal state
		};

		document.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("scroll", handleScroll);
		document.addEventListener("click", handleClick); // Track click event

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("click", handleClick); // Clean up click event listener
			clearTimeout(scrollTimeout); // Clean up the timeout when component is unmounted
			clearTimeout(moveTimeout); // Clean up the move timeout
		};
	}, [isScrolling]);

	return (
		<>
			{/* Custom Cursor Ring */}
			{isCursorVisible && (
				<div
					style={{
						position: "absolute",
						left: `${cursorPosition.x - 20}px`, // Center the cursor
						top: `${cursorPosition.y - 20}px`,
						width: isClicked ? "60px" : "40px", // Grow the cursor ring on click
						height: isClicked ? "60px" : "40px", // Grow the cursor ring on click
						borderRadius: "50%",
						border: "2px solid #dcdcdc", // Off-white color for the ring
						pointerEvents: "none", // Ensure it doesn't block interactions
						transition: "width 0.2s ease, height 0.2s ease", // Smooth cursor size change
						zIndex: 9999,
				 // Off-white background color inside the ring
					}}
				/>
			)}
		</>
	);
};

export default CursorEffect;
