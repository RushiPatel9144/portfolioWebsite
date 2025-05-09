/** @format */

import React from "react";

const GlassGlowDivider = ({ flip = false }) => {
	return (
		<div className={`relative  ${flip ? "rotate-180" : ""}`}>
			{/* Moving blurred glow */}
			<div className="w-full h-[10px] bg-glow-gradient blur-md animate-gradientMove" />

			{/* Pulsing flicker line */}
			<div className="absolute top-0 left-0 w-full  bg-glow-gradient animate-glow animate-glowFlicker rounded-full shadow-[0_0_12px_#c316a2,0_0_24px_#fbbf24]" />
		</div>
	);
};

export default GlassGlowDivider;
