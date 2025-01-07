import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../hooks';
import { validatePassword } from '../utils/validatePassword';

const RegisterPage = () => {
	const { createUser, handleLogout, handleUpdateProfile } = useAuth();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [photoURL, setPhotoURL] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const passwordErrors = validatePassword(password, confirmPassword);
		if (passwordErrors.length > 0) {
			setError(`${passwordErrors.join(', ')}`);
			return;
		}
		try {
			await createUser(email, password);
			await handleUpdateProfile({ displayName: name, photoURL });
			await handleLogout();
			toast.success('Registration successful.');
			navigate('/login');
		} catch (err) {
			console.error('Registration error:', err);
			toast.error('Something went wrong!');
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
						Create your account
					</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm space-y-4">
						<div>
							<label
								htmlFor="name"
								className="text-sm font-medium text-gray-700 dark:text-gray-300"
							>
								Full Name
							</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								placeholder="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="email-address"
								className="text-sm font-medium text-gray-700 dark:text-gray-300"
							>
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								placeholder="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="photo-url"
								className="text-sm font-medium text-gray-700 dark:text-gray-300"
							>
								Photo URL (Optional)
							</label>
							<input
								id="photo-url"
								name="photoURL"
								type="url"
								className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								placeholder="Photo URL (optional)"
								value={photoURL}
								onChange={(e) => setPhotoURL(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="text-sm font-medium text-gray-700 dark:text-gray-300"
							>
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="new-password"
								required
								className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="confirmPassword"
								className="text-sm font-medium text-gray-700 dark:text-gray-300"
							>
								Confirm Password
							</label>
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								required
								className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								placeholder="Rewrite Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
					</div>

					{error && <div className="text-red-500 text-sm mt-2">{error}</div>}

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
						>
							Register
						</button>
					</div>
				</form>

				<div className="text-sm text-center">
					<Link
						to="/login"
						className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-500 transition duration-300"
					>
						Already have an account? Log in
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
