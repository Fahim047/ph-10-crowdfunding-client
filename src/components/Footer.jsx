import { Link } from 'react-router-dom';
import FaceBookIcon from '../assets/facebook.svg';
import XIcon from '../assets/x.svg';

const FooterLink = ({ text }) => (
	<li>
		<Link
			to="/"
			className="text-gray-600 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
		>
			{text}
		</Link>
	</li>
);

const Footer = () => {
	return (
		<footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100">
			<div className="max-w-7xl mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Brand Section */}
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<span className="font-bold text-xl text-indigo-600 dark:text-indigo-400">
								CROWDCUBE
							</span>
						</div>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							A crowdfunding platform dedicated to helping bring ideas to life.
						</p>
						<ul className="flex items-center gap-4">
							<li>
								<Link to="/">
									<img src={FaceBookIcon} alt="Facebook" className="h-6 w-6" />
								</Link>
							</li>
							<li>
								<Link to="/">
									<img src={XIcon} alt="X" className="h-6 w-6" />
								</Link>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<FooterLink text="About Us" />
							<FooterLink text="How It Works" />
							<FooterLink text="Impact Stories" />
							<FooterLink text="Join As Volunteer" />
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-4">
							Contact
						</h3>
						<ul className="space-y-2">
							<FooterLink text="support@crowdcube.org" />
							<FooterLink text="+880 1234-567890" />
							<FooterLink text="Dhaka, Bangladesh" />
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-4">
							Newsletter
						</h3>
						<div className="flex flex-col space-y-2">
							<input
								type="email"
								placeholder="Enter your email"
								className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300"
							/>
							<button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors text-white">
								Subscribe
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
					<p>© 2024 CrowdCube. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
