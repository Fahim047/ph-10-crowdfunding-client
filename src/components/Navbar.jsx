import {
	BarChart,
	DollarSign,
	Heart,
	Home,
	LogOut,
	Menu,
	PlusCircle,
	X,
} from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../hooks';

const Navbar = () => {
	const { user, handleLogout } = useAuth();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();

	const logout = async () => {
		await handleLogout();
		navigate('/');
		toast.success('Logged out successfully.');
	};

	const NavItem = ({ to, children, onClick }) => (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`px-3 py-2 rounded-md text-sm text-nowrap font-medium transition duration-150 ease-in-out ${
					isActive
						? 'text-indigo-600 bg-indigo-50'
						: 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
				}`
			}
			onClick={onClick}
		>
			{children}
		</NavLink>
	);

	const MobileNavItem = ({ to, icon: Icon, children, onClick }) => (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`flex items-center px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out ${
					isActive
						? 'text-indigo-600 bg-indigo-50'
						: 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
				}`
			}
			onClick={onClick}
		>
			<Icon className="mr-3 h-5 w-5" />
			{children}
		</NavLink>
	);

	return (
		<nav className="bg-white shadow-lg sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 py-4">
				<div className="flex justify-between">
					<div className="flex items-center">
						<Link to="/" className="flex-shrink-0 flex items-center">
							<span className="text-2xl font-bold text-indigo-600">
								CROWDCUBE
							</span>
						</Link>
						<div className="hidden md:ml-6 md:flex md:flex-wrap gap-2">
							<NavItem to="/">Home</NavItem>
							<NavItem to="/campaigns">All Campaigns</NavItem>
							{user && (
								<>
									<NavItem to="/add-campaign">Add New Campaign</NavItem>
									<NavItem to="/my-campaigns">My Campaigns</NavItem>
									<NavItem to="/my-donations">My Donations</NavItem>
								</>
							)}
						</div>
					</div>
					<div className="hidden md:ml-2 md:flex md:items-center">
						{user ? (
							<div className="flex items-center">
								<div className="flex flex-col justify-center items-center">
									<img
										src={user.photoURL || 'https://i.pravatar.cc/150'}
										alt="User avatar"
										className="h-8 w-8 rounded-full"
									/>
									<p className="text-center text-sm font-medium text-gray-700">
										{user?.displayName?.split(' ')[0]}
									</p>
								</div>
								<button
									onClick={logout}
									className="ml-4 text-nowrap px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
								>
									Log out
								</button>
							</div>
						) : (
							<div>
								<Link
									to="/login"
									className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
								>
									Log in
								</Link>
								<Link
									to="/register"
									className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-indigo-600 bg-white border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
								>
									Register
								</Link>
							</div>
						)}
					</div>
					<div className="-mr-2 flex items-center md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						>
							<span className="sr-only">Open main menu</span>
							{isMenuOpen ? (
								<X className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<MobileNavItem
							to="/"
							icon={Home}
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</MobileNavItem>
						<MobileNavItem
							to="/campaigns"
							icon={BarChart}
							onClick={() => setIsMenuOpen(false)}
						>
							All Campaigns
						</MobileNavItem>
						{user && (
							<>
								<MobileNavItem
									to="/add-campaign"
									icon={PlusCircle}
									onClick={() => setIsMenuOpen(false)}
								>
									Add New Campaign
								</MobileNavItem>
								<MobileNavItem
									to="/my-campaigns"
									icon={Heart}
									onClick={() => setIsMenuOpen(false)}
								>
									My Campaigns
								</MobileNavItem>
								<MobileNavItem
									to="/my-donations"
									icon={DollarSign}
									onClick={() => setIsMenuOpen(false)}
								>
									My Donations
								</MobileNavItem>
							</>
						)}
					</div>
					<div className="pt-4 pb-3 border-t border-gray-200">
						{user ? (
							<div className="flex items-center px-5">
								<div className="flex-shrink-0">
									<img
										src={user?.photoURL || 'https://i.pravatar.cc/150'}
										alt="User avatar"
										className="h-10 w-10 rounded-full"
									/>
								</div>
								<div className="ml-3">
									<div className="text-base font-medium text-gray-800">
										{user?.displayName}
									</div>
									<div className="text-sm font-medium text-gray-500">
										{user?.email}
									</div>
								</div>
								<button
									onClick={() => {
										logout();
										setIsMenuOpen(false);
									}}
									className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									<span className="sr-only">Log out</span>
									<LogOut className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
						) : (
							<div className="mt-3 px-2 space-y-1">
								<Link
									to="/login"
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
									onClick={() => setIsMenuOpen(false)}
								>
									Log in
								</Link>
								<Link
									to="/register"
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
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
