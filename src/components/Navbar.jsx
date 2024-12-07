import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

	return (
		<nav className="sticky top-0 z-50 bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between py-4">
					<Link
						to="/"
						className="flex-shrink-0 text-2xl font-bold text-indigo-700"
					>
						CROWDCUBE
					</Link>
					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-8">
							<Link to="/">Home</Link>
							<Link to="/campaigns">All Campaigns</Link>
							{user && (
								<>
									<Link to="/add-campaign">Add New Campaign</Link>
									<Link to="/my-campaigns">My Campaigns</Link>
									<Link to="/my-donations">My Donations</Link>
								</>
							)}
						</div>
					</div>
					<div className="hidden md:block">
						<div className="ml-4 flex items-center md:ml-6">
							{user ? (
								<div className="flex items-center">
									<div className="relative">
										<img
											src={user?.photoURL || 'https://i.pravatar.cc/150'}
											alt="User avatar"
											width={32}
											height={32}
											className="rounded-full"
										/>
										<span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white"></span>
									</div>
									<div className="ml-3">
										<button
											onClick={logout}
											className="min-w-24 btn btn-outline border-indigo-700 hover:btn-error"
										>
											Log out
										</button>
									</div>
								</div>
							) : (
								<div className="flex items-center space-x-2">
									<Link
										to="/login"
										className="btn bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
									>
										Log in
									</Link>
									<Link to="/register" className="btn btn-outline rounded-md">
										Register
									</Link>
								</div>
							)}
						</div>
					</div>
					<div className="-mr-2 flex md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="btn btn-ghost btn-outline rounded-md"
						>
							<span className="sr-only">Open main menu</span>
							{isMenuOpen ? (
								<X className="block h-6 w-6" />
							) : (
								<Menu className="block h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden">
					<div className="flex flex-col items-center gap-4 px-2 pt-2 pb-3 sm:px-3">
						<Link to="/">Home</Link>
						<Link to="/campaigns">All Campaigns</Link>
						{user && (
							<>
								<Link to="/add-campaign">Add New Campaign</Link>
								<Link to="/my-campaigns">My Campaigns</Link>
								<Link to="/my-donations">My Donations</Link>
							</>
						)}
					</div>
					<div className="pt-4 pb-3 border-t border-gray-700">
						{user ? (
							<div className="flex items-center px-5">
								<div className="flex-shrink-0">
									<img
										src={
											user?.photoURL ||
											'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
										}
										alt="User avatar"
										width={40}
										height={40}
										className="rounded-full"
									/>
								</div>
								<div className="ml-3">
									<div className="text-base font-medium leading-none text-indigo-700">
										{user?.displayName}
									</div>
									<div className="text-sm font-medium leading-none text-gray-400">
										{user?.email}
									</div>
								</div>
								<button
									onClick={logout}
									className="min-w-24 btn btn-outline border-indigo-700 hover:btn-error"
								>
									Log out
								</button>
							</div>
						) : (
							<div className="mt-3 px-2 space-y-1">
								<Link to="/login" className="block btn btn-primary w-full">
									Log in
								</Link>
								<Link to="/register" className="block btn btn-secondary w-full">
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
