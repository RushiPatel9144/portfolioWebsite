/** @format */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
			className="py-20 px-5 bg-gradient-to-r from-gray-800 to-black text-white"
		>
			<h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
			<form
				ref={form}
				onSubmit={sendEmail}
				className="max-w-3xl mx-auto"
			>
				<div className="mb-4">
					<label
						className="block text-sm font-semibold mb-1"
						htmlFor="name"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-amber-500"
						placeholder="Your Name"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-sm font-semibold mb-1"
						htmlFor="email"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-amber-500"
						placeholder="Your Email"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-sm font-semibold mb-1"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						rows="4"
						required
						className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-amber-500"
						placeholder="Your Message"
					></textarea>
				</div>
				<button
					type="submit"
					className="w-full bg-white text-black py-2 px-4 rounded hover:bg-amber-400 "
				>
					Send Message
				</button>
				{isSent && (
					<p className="mt-4 text-green-500">
						Thank you! Your message has been sent.
					</p>
				)}
			</form>
		</section>
	);
};

export default Contact;
