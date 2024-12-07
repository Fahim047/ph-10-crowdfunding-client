import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
	const { title, imageURL, minDonation, targetDonation, description } =
		campaign;
	return (
		<div className="p-4 border-2 group hover:border-green-600 rounded-xl overflow-hidden relative">
			<div className="overflow-hidden rounded-md">
				<img
					src={imageURL}
					alt="title"
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
				{title}
			</h4>
			<p className="text-gray-500">{description}</p>
			<div className="text-end">
				<Link
					to={`/campaigns/${campaign._id}`}
					className="text-gray-500 hover:text-indigo-700 underline"
				>
					See more...
				</Link>
			</div>
		</div>
	);
};

export default CampaignCard;
