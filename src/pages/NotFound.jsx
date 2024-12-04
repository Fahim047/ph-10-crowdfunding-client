import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	const [countdown, setCountdown] = useState(10);

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (countdown === 0) {
			window.location.href = '/';
		}
	}, [countdown]);

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 text-center">
				<div className="space-y-4">
					<h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
					<h2 className="text-4xl font-bold text-gray-900">Page Not Found</h2>
					<p className="text-xl text-gray-600">
						Oops! The page you're looking for doesn't exist.
					</p>
				</div>
				<div className="space-y-4">
					<p className="text-lg text-gray-600">
						You will be redirected to the home page in{' '}
						<span className="font-bold text-indigo-600">{countdown}</span>{' '}
						seconds.
					</p>
					<div className="flex justify-center space-x-4">
						<Link
							to="/"
							className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Go Home Now
						</Link>
						<button
							onClick={() => window.history.back()}
							className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Go Back
						</button>
					</div>
				</div>
				<div className="mt-8">
					<p className="text-lg text-gray-600">Here are some helpful links:</p>
					<ul className="mt-4 space-y-2">
						<li>
							<Link to="/" className="text-indigo-600 hover:text-indigo-500">
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								className="text-indigo-600 hover:text-indigo-500"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="text-indigo-600 hover:text-indigo-500"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
