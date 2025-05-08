/** @format */

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import back from "../assets/12.jpg";

const Contact = () => {
	const form = useRef();
	const [isSent, setIsSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log("Email successfully sent!", result.text);
					setIsSent(true);
					form.current.reset();
				},
				(error) => {
					console.error("Error sending email", error.text);
					alert(
						"Failed to send the message. Please try again later."
					);
				}
			);
	};

	return (
		<section
			id="contact"
			className="py-20 px-5 relative text-white overflow-hidden dark:text-gray-100"
			style={{
				backgroundImage: `url(${back})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Overlay for darkening */}
			<div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-0 dark:bg-black/40"></div>

			<div className="relative z-10 max-w-3xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-10 text-white drop-shadow-md dark:text-white">
					Contact Me
				</h2>

				<form
					ref={form}
					onSubmit={sendEmail}
					className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 text-left dark:bg-black/30 dark:text-white"
				>
					<div className="mb-6">
						<label
							htmlFor="name"
							className="block text-sm mb-2 font-semibold dark:text-gray-300"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							className="w-full p-3 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-black/20 dark:border-white/30 dark:focus:ring-amber-500"
							placeholder="Your Name"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="block text-sm mb-2 font-semibold dark:text-gray-300"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							className="w-full p-3 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-black/20 dark:border-white/30 dark:focus:ring-amber-500"
							placeholder="you@example.com"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="block text-sm mb-2 font-semibold dark:text-gray-300"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							required
							className="w-full p-3 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-black/20 dark:border-white/30 dark:focus:ring-amber-500"
							placeholder="What's on your mind?"
						></textarea>
					</div>
					<button
						type="submit"
						className="hover:drop-shadow-[0_0_5px_#f59e0b] w-full py-3 font-bold text-white rounded bg-gradient-to-r from-pink-600 via-amber-500 to-yellow-400 hover:scale-x-95 transition-transform shadow-xl dark:from-pink-400 dark:via-amber-300 dark:to-yellow-200"
					>
						Send Message
					</button>
					{isSent && (
						<p className="mt-6 text-green-400 text-sm text-center dark:text-green-300">
							✅ Thank you! Your message has been sent.
						</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default Contact;
