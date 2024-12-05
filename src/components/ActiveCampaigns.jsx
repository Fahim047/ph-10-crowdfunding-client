import { Link } from 'react-router-dom';
import KidsImage from '../assets/kids.png';
const ActiveCampaigns = () => {
	const id = 1;
	return (
		<section className="max-w-7xl mx-auto px-4">
			<h2 className="text-4xl font-bold mb-12">Active Campaigns</h2>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<div className="p-4 border-2 group hover:border-green-600 rounded-xl overflow-hidden relative">
					<div className="overflow-hidden rounded-md">
						<img
							src={KidsImage}
							alt=""
							className="w-full h-52 object-left transform group-hover:scale-110 transition-transform duration-300"
						/>
					</div>
					<progress
						className="progress progress-success w-full"
						value="50"
						max="100"
					></progress>
					<div className="py-4 flex items-stretch text-center border-b-2 mb-2">
						<div className="flex-1 border-r-2">
							<p className="text-gray-500">Current</p>
							<p className="text-lg font-bold">$10201</p>
						</div>
						<div className="flex-1 self-center">
							<p className="text-lg font-bold">50%</p>
						</div>
						<div className="flex-1 border-l-2">
							<p className="text-gray-500">Target</p>
							<p className="text-lg font-bold">$10201</p>
						</div>
					</div>
					<h4 className="text-2xl font-bold group-hover:text-green-600 mb-2">
						Campaign Title
					</h4>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
						similique.
					</p>
					<div className="text-end">
						<Link
							to={`/campaigns/${id}`}
							className="text-gray-500 hover:text-indigo-700 underline"
						>
							See more...
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ActiveCampaigns;
