import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { useAuth } from '../hooks'; // Custom hook to get authenticated user

const MyCampaignsPage = () => {
	const { user } = useAuth();
	const [campaigns, setCampaigns] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchMyCampaigns = async () => {
			if (!user?.email) return;
			setLoading(true);
			try {
				const response = await fetch(
					`http://localhost:8000/api/v1/campaigns/my-campaigns?email=${user.email}`
				);
				const data = await response.json();
				setCampaigns(data.data);
			} catch (error) {
				console.error('Error fetching user campaigns:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchMyCampaigns();
	}, [user]);

	if (loading) return <Loader />;
	return (
		<div className="max-w-7xl mx-auto p-6">
			<h1 className="text-3xl font-bold mb-6">My Campaigns</h1>
			<div className="overflow-x-auto">
				<table className="min-w-full table-auto border-collapse border border-gray-200">
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
								key={campaign._id}
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
									{new Date(campaign.deadline).toLocaleDateString()}
								</td>
								<td className="border border-gray-200 px-4 py-2 text-center">
									<div className="flex items-center justify-center gap-4">
										<button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
											Update
										</button>
										<button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
											Delete
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyCampaignsPage;
