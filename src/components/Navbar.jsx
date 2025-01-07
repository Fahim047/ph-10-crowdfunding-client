import { LogOut, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth, useTheme } from '../hooks';

const Navbar = () => {
	const { user, handleLogout } = useAuth();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { darkMode, setDarkMode } = useTheme();
	const navigate = useNavigate();
	console.log(user);

	// Links for desktop navigation
	const navigationLinks = [
		{ name: 'Home', to: '/' },
		{ name: 'Campaigns', to: '/campaigns' },
		{ name: 'About', to: '/about' },
		{ name: 'Contact', to: '/contact' },
	];

	// Links available for the user when logged in
	const userLinks = [
		{ name: 'Add Campaign', to: '/add-campaign' },
		{ name: 'My Campaigns', to: '/my-campaigns' },
		{ name: 'My Donations', to: '/my-donations' },
	];

	const activeClass = 'text-indigo-600 dark:text-indigo-400 font-semibold';
	const baseClass =
		'text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition';

	const logout = async () => {
		await handleLogout();
		navigate('/');
	};

	return (
		<nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-[999]">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center">
						<Link
							to="/"
							className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
						>
							CROWDCUBE
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-6">
						{navigationLinks.map((link) => (
							<NavLink
								key={link.name}
								to={link.to}
								className={({ isActive }) =>
									isActive ? activeClass : baseClass
								}
							>
								{link.name}
							</NavLink>
						))}
						{/* Theme Switcher */}
						<button
							onClick={() => setDarkMode(!darkMode)}
							className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
						>
							{darkMode ? <Sun size={20} /> : <Moon size={20} />}
						</button>

						{/* User Dropdown or SignIn/Register */}
						{user ? (
							<div className="relative">
								<button
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									className="flex items-center focus:outline-none border-2 rounded-full border-indigo-600"
								>
									<img
										src={user?.photoURL}
										alt="Avatar"
										referrerPolicy="no-referrer"
										className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700"
									/>
								</button>
								{isMenuOpen && (
									<div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-2 z-10">
										{userLinks.map((link) => (
											<NavLink
												key={link.name}
												to={link.to}
												className={({ isActive }) =>
													isActive
														? `${activeClass} block px-4 py-2`
														: `${baseClass} block px-4 py-2`
												}
											>
												{link.name}
											</NavLink>
										))}
										<button
											onClick={logout}
											className="text-red-500 block px-4 py-2 w-full text-left"
										>
											<LogOut size={16} className="mr-2 inline" />
											Logout
										</button>
									</div>
								)}
							</div>
						) : (
							<div className="flex space-x-4">
								<Link
									to="/login"
									className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
								>
									Sign In
								</Link>
								<Link
									to="/register"
									className="inline-block bg-transparent border-2 border-indigo-600 text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300"
								>
									Register
								</Link>
							</div>
						)}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
					<div className="space-y-2 px-4 py-4">
						{navigationLinks.map((link) => (
							<NavLink
								key={link.name}
								to={link.to}
								className={({ isActive }) =>
									isActive ? `${activeClass} block` : `${baseClass} block`
								}
							>
								{link.name}
							</NavLink>
						))}
						<button
							onClick={() => setDarkMode(!darkMode)}
							className="flex items-center space-x-2 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
						>
							{darkMode ? <Sun size={20} /> : <Moon size={20} />}
							<span>Switch Theme</span>
						</button>
						{/* User Links for Mobile */}
						{user ? (
							<div className="border-t border-gray-200 dark:border-gray-700 pt-2">
								{userLinks.map((link) => (
									<NavLink
										key={link.name}
										to={link.to}
										className={({ isActive }) =>
											isActive
												? `${activeClass} block py-2`
												: `${baseClass} block py-2`
										}
									>
										{link.name}
									</NavLink>
								))}
								<button
									onClick={logout}
									className="inline-block bg-red-600 text-white py-2 px-4 rounded-md w-full mt-2 hover:bg-red-700 transition duration-300"
								>
									<LogOut size={16} className="mr-2 inline" />
									Logout
								</button>
							</div>
						) : (
							<div className="border-t border-gray-200 dark:border-gray-700 pt-2">
								<Link
									to="/login"
									className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md w-full hover:bg-indigo-700 transition duration-300"
									onClick={() => setIsMenuOpen(false)}
								>
									Sign In
								</Link>
								<Link
									to="/register"
									className="inline-block bg-transparent border-2 border-indigo-600 text-indigo-600 py-2 px-4 rounded-md w-full mt-2 hover:bg-indigo-600 hover:text-white transition duration-300"
									onClick={() => setIsMenuOpen(false)}
								>
									Register
								</Link>
							</div>
						)}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
