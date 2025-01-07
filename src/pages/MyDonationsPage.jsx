import { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import Loader from '../components/Loader';
import { useAuth } from '../hooks';

const MyDonationsPage = () => {
	const { user } = useAuth();
	const [donations, setDonations] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchDonations = async () => {
			if (!user?.email) return;
			setLoading(true);
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/api/v1/donations/user/${
						user.email
					}`
				);
				const data = await response.json();
				setDonations(data.data);
			} catch (error) {
				console.error('Error fetching user donations:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchDonations();
	}, [user?.email]);

	if (loading) return <Loader />;

	return (
		<div className="max-w-7xl mx-auto min-h-screen p-8">
			<h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
				My Donations
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				<Zoom>
					{donations?.map((donation) => (
						<div
							key={donation._id}
							className="bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-transform hover:shadow-xl hover:border-indigo-500"
						>
							<div className="flex flex-col h-full">
								{/* Campaign Title and Date */}
								<div className="mb-4">
									<h2 className="text-2xl font-bold text-gray-900">
										{donation.campaignId.title}
									</h2>
									<p className="text-gray-500 text-sm mt-1">
										{new Date(donation.createdAt).toLocaleDateString()}
									</p>
								</div>

								{/* Donation Amount */}
								<div className="mb-4">
									<p className="text-lg text-gray-700">Amount Donated:</p>
									<p className="text-2xl font-semibold text-green-600">
										${donation.amount}
									</p>
								</div>

								{/* Message */}
								<div className="flex-grow mt-auto">
									<p className="text-gray-600 italic">
										{donation.message || 'No message provided.'}
									</p>
								</div>
							</div>
						</div>
					))}
				</Zoom>
			</div>
		</div>
	);
};

export default MyDonationsPage;
