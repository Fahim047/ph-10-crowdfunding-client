import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const AboutPage = () => {
	return (
		<div className="min-h-screen py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Hero Section */}
				<div className="text-center">
					<h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">
						About Us
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
						Welcome to{' '}
						<span className="text-indigo-600 dark:text-indigo-400 font-bold">
							CrowdCube
						</span>
						, the leading crowdfunding platform where creators can raise funds
						to bring their ideas to life, and backers can support innovative
						projects they believe in. Whether you're launching a new product,
						funding a creative project, or supporting a cause, CrowdCube
						connects people with shared passions to make dreams a reality.
					</p>
				</div>

				{/* Mission Section */}
				<div className="mt-12">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<img
							src="https://realhelpinghands.com/wp-content/uploads/2024/03/Real-Helping-Hands-390500-827x853.png"
							alt="Crowdfunding mission"
							className="rounded-lg shadow-xl w-full md:w-1/2"
						/>
						<div className="max-w-lg text-center md:text-left">
							<h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
								Empowering Innovators, Fueling Ideas
							</h2>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
								At CrowdCube, we believe in the power of community. Our mission
								is to provide a platform where creators, entrepreneurs, and
								changemakers can turn their ideas into reality. Whether you're
								launching a groundbreaking product or supporting a cause you
								care about, we are here to connect people, resources, and
								opportunities to create lasting impact.
							</p>
							<p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
								Join us in transforming dreams into tangible projects. With the
								help of passionate backers and supporters, we make it possible
								for creators to fund, grow, and thrive in today’s ever-evolving
								world.
							</p>
						</div>
					</div>
				</div>

				{/* How It Works Section */}
				<div className="mt-12">
					<h2 className="text-4xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-8">
						How It Works
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Step 1 */}
						<div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
							<h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
								Start Your Campaign
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Create a campaign that tells your story, sets clear goals, and
								inspires people to back your project.
							</p>
						</div>
						{/* Step 2 */}
						<div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
							<h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
								Spread the Word
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Use our tools to share your campaign with your network and grow
								your supporter base.
							</p>
						</div>
						{/* Step 3 */}
						<div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
							<h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
								Achieve Your Goals
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Celebrate with your backers as you bring your project to life
								and achieve your dreams.
							</p>
						</div>
					</div>
				</div>

				{/* Why Choose Us Section */}
				<div className="mt-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg shadow-lg p-8 text-center">
					<h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
						Why Choose Us?
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
						At{' '}
						<span className="font-semibold text-indigo-600 dark:text-indigo-400">
							CrowdCube
						</span>
						, we prioritize transparency, security, and inclusivity. Our
						platform is built with you in mind — ensuring your campaign is easy
						to create, share, and track. We provide the tools to help your
						dreams become reality, and our community is here to support you
						every step of the way.
					</p>
				</div>

				{/* Testimonials Section */}
				<Testimonials />

				{/* Call to Action */}
				<div className="mt-12 text-center">
					<h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
						Ready to Start Your Journey?
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
						Join a vibrant community of creators and supporters who are changing
						the world, one project at a time.
					</p>
					<Link
						to="/add-campaign"
						className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition"
					>
						Start a Campaign
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
