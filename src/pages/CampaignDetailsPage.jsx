import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputField from '../components/Forms/InputField';
import TextareaField from '../components/Forms/TextAreaField';
import Loader from '../components/Loader';
import { useAuth } from '../hooks';

const CampaignDetailsPage = () => {
	const { user } = useAuth();
	const { campaignId } = useParams();
	const [campaign, setCampaign] = useState({});
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		amount: '',
		message: '',
	});

	useEffect(() => {
		const fetchCampaign = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/api/v1/campaigns/${campaignId}`
				);
				const data = await response.json();
				setCampaign(data.data);
			} catch (err) {
				console.error(err);
				toast.error('Failed to fetch campaign');
			} finally {
				setLoading(false);
			}
		};
		fetchCampaign();
	}, [campaignId]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleDonate = async () => {
		if (!user) return toast.error('You must be logged in to donate.');
		if (!formData.amount || formData.amount < campaign.minDonation) {
			toast.error(
				`Please enter an amount of at least $${campaign.minDonation}.`
			);
			return;
		}

		try {
			const donationData = {
				campaignId,
				amount: parseFloat(formData.amount),
				message: formData.message,
				donor: {
					name: user?.displayName,
					email: user?.email,
					photoURL: user?.photoURL,
				},
			};

			const response = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/api/v1/donations`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(donationData),
				}
			);

			if (response.ok) {
				const result = await response.json();
				toast.success('Donation successful!');

				setCampaign((prevCampaign) => ({
					...prevCampaign,
					currentAmount:
						prevCampaign.currentAmount + parseFloat(formData.amount),
				}));

				setFormData({
					amount: '',
					message: '',
				});
			} else {
				const error = await response.json();
				toast.error(error.message || 'Failed to process donation.');
			}
		} catch (error) {
			console.error('Error during donation:', error);
			toast.error('An error occurred. Please try again.');
		}
	};

	if (loading) return <Loader />;

	const {
		imageURL,
		title,
		type,
		description,
		minDonation,
		deadline,
		currentAmount,
		targetAmount,
		author,
	} = campaign;

	const donationProgress = Math.min(
		((currentAmount / targetAmount) * 100).toFixed(0),
		100
	);

	const hasDeadlinePassed = new Date(deadline) < new Date();

	return (
		<section className="max-w-5xl mx-auto px-6 py-8">
			<div className="p-6 bg-white shadow-lg rounded-lg">
				<div className="relative w-full h-80 overflow-hidden rounded-lg mb-6">
					<img
						src={imageURL}
						alt={title}
						className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
					/>
					<span
						className={`absolute top-4 right-4 px-3 py-1 text-sm font-medium rounded-lg text-white ${
							hasDeadlinePassed ? 'bg-red-500' : 'bg-green-500'
						}`}
					>
						{hasDeadlinePassed ? 'Finished' : 'Active'}
					</span>
				</div>

				<h1 className="text-4xl font-bold mb-4 text-indigo-700">{title}</h1>
				<p className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-600 rounded-lg mb-6">
					{type}
				</p>

				<div className="mb-8">
					<div className="flex justify-between mb-3">
						<span className="text-gray-600 text-sm">
							${currentAmount || 0} Raised
						</span>
						<span className="text-gray-600 text-sm">
							Target: ${targetAmount || 0}
						</span>
					</div>
					<div className="w-full bg-gray-200 rounded-full h-4">
						<div
							className="bg-indigo-500 h-4 rounded-full"
							style={{ width: `${donationProgress}%` }}
						></div>
					</div>
					<p className="text-sm text-gray-500 mt-2">
						Deadline: {new Date(deadline).toLocaleDateString()}
					</p>
				</div>

				<p className="text-lg text-gray-700 leading-relaxed mb-8">
					{description}
				</p>

				<div className="flex items-center mb-8">
					<img
						src={author?.photoURL || 'https://i.pravatar.cc/50'}
						alt={author?.name}
						className="w-12 h-12 rounded-full mr-4"
					/>
					<div>
						<p className="text-sm font-medium">{author?.name}</p>
						<p className="text-xs text-gray-500">{author?.email}</p>
					</div>
				</div>

				<div className="p-6 bg-gray-50 rounded-lg">
					<h3 className="text-xl font-semibold mb-4 text-gray-700">
						Make a Donation
					</h3>
					<div className="space-y-4">
						<InputField
							label={`Donation Amount (Minimum $${minDonation})`}
							type="number"
							name="amount"
							value={formData.amount}
							onChange={handleInputChange}
							placeholder="Enter your donation amount"
							required
						/>
						<TextareaField
							label="Message (Optional)"
							name="message"
							value={formData.message}
							onChange={handleInputChange}
							rows={4}
							placeholder="Write a message"
						/>
						<button
							onClick={handleDonate}
							className={`w-full px-4 py-2 text-white font-medium rounded-md transition-colors ${
								hasDeadlinePassed
									? 'bg-gray-400 cursor-not-allowed'
									: 'bg-indigo-600 hover:bg-indigo-700'
							}`}
							disabled={hasDeadlinePassed}
						>
							Donate
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CampaignDetailsPage;
