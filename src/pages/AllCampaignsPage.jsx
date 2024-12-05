import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllCampaignsPage = () => {
	const [campaigns, setCampaigns] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchCampaigns = async () => {
			try {
				const response = await fetch('campaigns.json');
				const data = await response.json();
				setCampaigns(data);
			} catch (error) {
				console.error('Error fetching campaigns:', error);
			}
		};

		fetchCampaigns();
	}, []);

	return (
		<div className="max-w-7xl mx-auto p-6">
			<h1 className="text-3xl font-bold mb-6">All Campaigns</h1>

			{/* Table of Campaigns */}
			<div className="overflow-x-auto">
				<table className="min-w-full table-fixed border-collapse border border-gray-200">
					<thead>
						<tr className="bg-gray-100">
							<th className="border border-gray-200 px-4 py-2 text-left">#</th>
							<th className="border border-gray-200 px-4 py-2 text-left">
								Title
							</th>
							<th className="border border-gray-200 px-4 py-2 text-left">
								Type
							</th>
							<th className="border border-gray-200 px-4 py-2 text-left">
								Raised / Target
							</th>
							<th className="border border-gray-200 px-4 py-2 text-left">
								Deadline
							</th>
							<th className="border border-gray-200 px-4 py-2 text-center">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{campaigns.map((campaign, index) => (
							<tr
								key={campaign.id}
								className="hover:bg-gray-50 transition-colors"
							>
								<td className="border border-gray-200 px-4 py-2">
									{index + 1}
								</td>
								<td className="border border-gray-200 px-4 py-2">
									{campaign.title}
								</td>
								<td className="border border-gray-200 px-4 py-2">
									{campaign.type}
								</td>
								<td className="border border-gray-200 px-4 py-2">
									${campaign.currentDonation} / ${campaign.targetDonation}
								</td>
								<td className="border border-gray-200 px-4 py-2">
									{new Date(campaign.deadline).toLocaleDateString()}
								</td>
								<td className="border border-gray-200 px-4 py-2 text-center">
									<button
										onClick={() => navigate(`/campaigns/${campaign.id}`)}
										className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
									>
										See More
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllCampaignsPage;
