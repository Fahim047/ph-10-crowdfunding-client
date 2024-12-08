import { useEffect, useState } from 'react';
import CampaignCard from './CampaignCard';
import Loader from './Loader';
const ActiveCampaigns = () => {
	const [campaigns, setCampaigns] = useState([]);
	const [loading, setLoading] = useState(false);
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
		<section className="max-w-7xl mx-auto px-4 py-20">
			<h2 className="text-4xl font-extrabold text-gray-800 mb-12">
				Active Campaigns
			</h2>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{campaigns.map((campaign) => (
					<CampaignCard key={campaign._id} campaign={campaign} />
				))}
			</div>
		</section>
	);
};

export default ActiveCampaigns;
