import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
	const {
		title,
		imageURL,
		minDonation,
		currentAmount,
		targetAmount,
		description,
	} = campaign;

	const donationProgress = Math.min(
		((currentAmount / targetAmount) * 100).toFixed(0),
		100
	);

	return (
		<div className="flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow group overflow-hidden relative">
			{/* Image */}
			<div className="overflow-hidden rounded-lg">
				<img
					src={imageURL}
					alt={title}
					className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
				/>
			</div>

			{/* Progress Bar with Percentage */}
			<div>
				<div className="flex items-center justify-between mb-2">
					<span className="text-sm text-gray-600">Donation Progress:</span>
					<span className="text-sm font-semibold text-green-600">
						{donationProgress}%
					</span>
				</div>
				<progress
					className="progress progress-success w-full"
					value={donationProgress}
					max="100"
				></progress>
			</div>

			{/* Donation Stats */}
			<div className="flex justify-between text-center border-b pb-4 mt-4">
				<div>
					<p className="text-gray-500 text-sm">Current</p>
					<p className="text-xl font-semibold text-green-600">
						${currentAmount}
					</p>
				</div>
				<div>
					<p className="text-gray-500 text-sm">Target</p>
					<p className="text-xl font-semibold text-gray-700">${targetAmount}</p>
				</div>
			</div>

			{/* Title and Description */}
			<div className="flex flex-col flex-grow mt-4">
				<h4 className="text-xl font-bold text-gray-800 group-hover:text-green-600 mb-2">
					{title}
				</h4>
				<p className="text-gray-600 line-clamp-3">{description}</p>
			</div>

			{/* See More Button */}
			<div className="mt-auto">
				<Link
					to={`/campaigns/${campaign._id}`}
					className="w-full inline-block text-center bg-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-600 transition"
				>
					See More
				</Link>
			</div>
		</div>
	);
};

export default CampaignCard;
