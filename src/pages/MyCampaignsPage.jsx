import { CircleX } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Loader from '../components/Loader';
import UpdateCampaignModal from '../components/UpdateCampaignModal';
import { useAuth } from '../hooks'; // Custom hook to get authenticated user
const MyCampaignsPage = () => {
	const { user } = useAuth();
	const [campaigns, setCampaigns] = useState([]);
	const [loading, setLoading] = useState(false);
	const [selectedCampaign, setSelectedCampaign] = useState(null);

	useEffect(() => {
		const fetchMyCampaigns = async () => {
			if (!user?.email) return;
			setLoading(true);
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/api/v1/campaigns/user/${
						user.email
					}`
				);
				const data = await response.json();
				setCampaigns(data?.data);
			} catch (error) {
				console.error('Error fetching user campaigns:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchMyCampaigns();
	}, [user]);

	const handleOpenModal = (campaign) => {
		setSelectedCampaign(campaign);
	};

	const handleCloseModal = () => {
		setSelectedCampaign(null);
	};

	const handleDelete = async (campaignId) => {
		try {
			const result = await Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: 'red',
				cancelButtonColor: 'gray',
				confirmButtonText: 'Delete',
			});
			if (result.isConfirmed) {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/api/v1/campaigns/${campaignId}`,
					{
						method: 'DELETE',
					}
				);
				if (response.ok) {
					toast.success('Campaign deleted!');
					setCampaigns((prevCampaigns) =>
						prevCampaigns.filter((c) => c._id !== campaignId)
					);
				} else {
					toast.error('Failed to delete. Try again.');
				}
			}
		} catch (err) {
			console.log(err);
		}
	};

	if (loading) return <Loader />;
	if (campaigns.length === 0) {
		return (
			<div className="max-w-7xl mx-auto p-6">
				<div className="min-h-[300px] flex flex-col items-center justify-center">
					<CircleX size={64} />
					<h1 className="text-3xl font-bold mb-6">You have no campaigns</h1>
				</div>
			</div>
		);
	}
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
						{campaigns?.map((campaign, index) => (
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
										<button
											onClick={() => handleOpenModal(campaign)}
											className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
										>
											Update
										</button>
										<button
											onClick={() => handleDelete(campaign._id)}
											className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
										>
											Delete
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Update Campaign Modal */}
			{selectedCampaign && (
				<UpdateCampaignModal
					isOpen={!!selectedCampaign}
					onClose={handleCloseModal}
					campaignId={selectedCampaign._id}
					existingData={selectedCampaign}
					setCampaigns={setCampaigns}
				/>
			)}
		</div>
	);
};

export default MyCampaignsPage;
