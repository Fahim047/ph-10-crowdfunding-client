import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const AllCampaignsPage = () => {
	const [campaigns, setCampaigns] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isAscending, setIsAscending] = useState(true);
	const [sortCriteria, setSortCriteria] = useState('');
	const navigate = useNavigate();

	const handleSort = (criteria) => {
		setSortCriteria(criteria);
		applySorting(criteria, isAscending);
	};

	const toggleSortOrder = () => {
		const newOrder = !isAscending;
		setIsAscending(newOrder); // Update the sort order
		applySorting(sortCriteria, newOrder);
	};

	const applySorting = (criteria, order) => {
		if (!criteria) return; // No sorting applied if criteria is not set
		const sortedCampaigns = campaigns.toSorted((a, b) => {
			if (criteria === 'minDonation') {
				return order
					? a.minDonation - b.minDonation
					: b.minDonation - a.minDonation;
			}
			if (criteria === 'type') {
				return order
					? a.type.localeCompare(b.type)
					: b.type.localeCompare(a.type);
			}
			if (criteria === 'goal') {
				return order
					? a.targetAmount - b.targetAmount
					: b.targetAmount - a.targetAmount;
			}
			if (criteria === 'deadline') {
				return order
					? new Date(a.deadline) - new Date(b.deadline)
					: new Date(b.deadline) - new Date(a.deadline);
			}
			return 0;
		});
		setCampaigns(sortedCampaigns);
	};

	useEffect(() => {
		const fetchCampaigns = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/api/v1/campaigns/all`
				);
				const data = await response.json();
				setCampaigns(data.data);
			} catch (error) {
				console.error('Error fetching campaigns:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchCampaigns();
	}, []);

	if (loading) {
		return <Loader />;
	}

	if (campaigns.length === 0) {
		return (
			<div className="max-w-7xl mx-auto p-6">
				<div className="min-h-[300px] flex flex-col items-center justify-center">
					<h1 className="text-3xl font-bold mb-6">No data found!</h1>
				</div>
			</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto p-6">
			<h1 className="text-3xl font-bold mb-6">All Campaigns</h1>
			<div className="flex justify-between items-center mb-6">
				<div className="flex gap-4">
					<select
						onChange={(e) => handleSort(e.target.value)}
						className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400"
					>
						<option value="" className="text-gray-700 dark:text-gray-300">
							Sort by
						</option>
						<option
							value="minDonation"
							className="text-gray-700 dark:text-gray-300"
						>
							Minimum Donation
						</option>
						<option value="type" className="text-gray-700 dark:text-gray-300">
							Type
						</option>
						<option value="goal" className="text-gray-700 dark:text-gray-300">
							Goal Amount
						</option>
						<option
							value="deadline"
							className="text-gray-700 dark:text-gray-300"
						>
							Deadline
						</option>
					</select>

					<button
						onClick={toggleSortOrder}
						className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition"
					>
						Order: {isAscending ? 'Ascending' : 'Descending'}
					</button>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
				{campaigns.map((campaign) => {
					const isActive = new Date(campaign.deadline) > new Date();
					return (
						<div
							key={campaign.id}
							className="border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition relative bg-white flex flex-col"
						>
							<img
								src={campaign.imageURL}
								alt={campaign.title}
								className="w-full h-40 object-cover"
							/>
							<div className="p-4 flex flex-col flex-grow">
								<div
									className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded ${
										isActive
											? 'bg-green-100 text-green-700'
											: 'bg-red-100 text-red-700'
									}`}
								>
									{isActive ? 'Active' : 'Finished'}
								</div>
								<h2 className="text-xl font-semibold mb-2 dark:text-indigo-600">
									{campaign.title}
								</h2>
								<div className="text-gray-500 mb-4">
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium">Goal:</span>
										<span className="font-semibold">
											${campaign.targetAmount}
										</span>
									</div>
									<div className="relative w-full bg-gray-200 rounded-full h-4 mt-2">
										<div
											className="bg-indigo-600 h-4 rounded-full"
											style={{
												width: `${
													(campaign.currentAmount / campaign.targetAmount) * 100
												}%`,
											}}
										></div>
									</div>
									<div className="flex items-center justify-between text-sm mt-2">
										<span>Raised:</span>
										<span className="font-semibold">
											${campaign.currentAmount}
										</span>
									</div>
								</div>
								<div className="text-gray-500 mb-4 flex items-center gap-2">
									<span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 rounded">
										{campaign.type}
									</span>
									<span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 rounded">
										Min ${campaign.minDonation}
									</span>
								</div>
								<p className="text-sm text-gray-500 mb-4">
									<strong>Deadline:</strong>{' '}
									{new Date(campaign.deadline).toLocaleDateString()}
								</p>
								<button
									onClick={() => navigate(`/campaigns/${campaign._id}`)}
									className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition mt-auto"
								>
									See More
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AllCampaignsPage;
