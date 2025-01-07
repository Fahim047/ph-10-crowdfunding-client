import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactUsPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success(
			'Thank you for reaching out! We will get back to you shortly.'
		);
		setFormData({ name: '', email: '', message: '' });
	};

	return (
		<div className="dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen py-12">
			<div className="max-w-7xl mx-auto p-8">
				<h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 text-center">
					Contact Us
				</h1>
				<p className="text-lg text-center max-w-2xl mx-auto mb-8">
					Have questions or need assistance? Feel free to reach out to us
					through the form below. We're here to help!
				</p>
				<form
					onSubmit={handleSubmit}
					className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
				>
					<div className="mb-6">
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Your Name"
							required
							className="bg-transparent w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Your Email"
							required
							className="bg-transparent w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Write your message here..."
							required
							className="bg-transparent w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
							rows="4"
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
					>
						Send Message
					</button>
				</form>
				<div className="mt-12 text-center">
					<p className="text-lg">
						Or reach us directly at{' '}
						<a
							href="mailto:support@myapp.com"
							className="text-indigo-600 dark:text-indigo-400 hover:underline"
						>
							support@crowdcube.com
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactUsPage;
