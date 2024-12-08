import { HandHeart, Leaf, Users } from 'lucide-react';
import React from 'react';

const WhyChooseUs = () => {
	return (
		<section className="py-12">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
					Why Choose Us?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
						<div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
							<HandHeart />
						</div>
						<h3 className="text-xl font-semibold text-gray-700 mb-2">
							Transparent Donations
						</h3>
						<p className="text-gray-600">
							Every donation is tracked, ensuring full transparency and
							accountability for contributors.
						</p>
					</div>
					<div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
						<div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
							<Users />
						</div>
						<h3 className="text-xl font-semibold text-gray-700 mb-2">
							Community Impact
						</h3>
						<p className="text-gray-600">
							Our platform empowers communities by connecting donors with
							meaningful campaigns.
						</p>
					</div>
					<div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
						<div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
							<Leaf />
						</div>
						<h3 className="text-xl font-semibold text-gray-700 mb-2">
							Sustainable Solutions
						</h3>
						<p className="text-gray-600">
							Support campaigns that focus on long-term growth and
							self-sustaining projects.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
