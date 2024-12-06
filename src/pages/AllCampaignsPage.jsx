import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
const AllCampaignsPage = () => {
	const [campaigns, setCampaigns] = useState([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		const fetchCampaigns = async () => {
			setLoading(true);
			try {
				const response = await fetch('http://localhost:8000/api/v1/campaigns');
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
	return (
		<div className="max-w-7xl mx-auto p-6">
			<h1 className="text-3xl font-bold mb-6">All Campaigns</h1>

			{/* Table of Campaigns */}
			<div className="overflow-x-auto">
				<table className="min-w-full table-fixed border-collapse border border-gray-200">
					<thead>
						<tr className="bg-gray-100 *:border *:border-gray-200 *:px-4 *:py-2 *:text-left">
							<th>#</th>
							<th>Title</th>
							<th>Type</th>
							<th>Raised / Target</th>
							<th>Deadline</th>
							<th className="!text-center">Actions</th>
						</tr>
					</thead>
					<tbody>
						{campaigns.map((campaign, index) => (
							<tr
								key={campaign.id}
								className="hover:bg-gray-50 transition-colors *:border *:border-gray-200 *:px-4 *:py-2"
							>
								<td>{index + 1}</td>
								<td>{campaign.title}</td>
								<td>{campaign.type}</td>
								<td>
									${campaign.currentDonation} / ${campaign.targetDonation}
								</td>
								<td>{new Date(campaign.deadline).toLocaleDateString()}</td>
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
