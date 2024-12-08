import { CircleX } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import CampaignCard from './CampaignCard';
import Loader from './Loader';
const ActiveCampaigns = () => {
	const [campaigns, setCampaigns] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchCampaigns = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/api/v1/campaigns/active`
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
					<CircleX size={64} />
					<h1 className="text-3xl font-bold mb-6">No data found!</h1>
				</div>
			</div>
		);
	}
	return (
		<section className="max-w-7xl mx-auto px-4 py-20">
			<h2 className="text-4xl font-extrabold text-gray-800 mb-12">
				Active Campaigns
			</h2>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<Slide cascade damping={0.1} direction="right">
					{campaigns.map((campaign) => (
						<CampaignCard key={campaign._id} campaign={campaign} />
					))}
				</Slide>
			</div>
		</section>
	);
};

export default ActiveCampaigns;
