import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { useAuth } from '../hooks';

const mockDonations = [
	{
		id: 1,
		campaignName: 'Help Build a Mosque',
		date: '2024-01-15',
		amount: 100,
		message:
			'Contributed to the construction of a mosque in the local community.',
	},
	{
		id: 2,
		campaignName: 'Support Madrasa Education',
		date: '2024-02-10',
		amount: 50,
		message: 'Donated for educational resources in a madrasa.',
	},
	{
		id: 3,
		campaignName: 'Orphanage Aid (Iyatim Khana)',
		date: '2024-03-05',
		amount: 75,
		message: 'Helped provide food and shelter for orphans.',
	},
];

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
					`http://localhost:8000/api/v1/donations/user/${user.email}`
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
		<div className="min-h-screen p-8">
			<h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
				My Donations
			</h1>
			<div className="flex flex-col gap-6">
				{donations.map((donation) => (
					<div
						key={donation._id}
						className="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-lg p-6 transition-transform border-2 border-transparent hover:border-indigo-500"
					>
						<div className="sm:w-1/3 text-center sm:text-left">
							<h2 className="text-2xl font-bold text-gray-900">
								{donation.campaignId.title}
							</h2>
							<p className="text-gray-500 text-sm mt-1">
								{new Date(donation.createdAt).toLocaleDateString()}
							</p>
						</div>
						<div className="sm:w-1/3 text-center sm:text-left mt-4 sm:mt-0">
							<p className="text-lg text-gray-700">Amount Donated:</p>
							<p className="text-2xl font-semibold text-green-600">
								${donation.amount}
							</p>
						</div>
						<div className="sm:w-1/3 text-center sm:text-left mt-4 sm:mt-0">
							<p className="text-gray-600 italic">
								{donation.message || 'No message provided.'}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyDonationsPage;
