import { useState } from 'react';
import KidsImage from '../assets/kids.png';
import InputField from '../components/Forms/InputField';
import TextareaField from '../components/Forms/TextAreaField';
const mockCampaign = {
	imageUrl: 'https://via.placeholder.com/600x400',
	title: 'Help Build a School',
	type: 'Personal Issue',
	message:
		'We are raising funds to build a school in a remote area to provide education for underprivileged children.',
	minDonation: 10,
	deadline: '2024-12-31',
	currentDonation: 2500,
	targetDonation: 5000,
	author: {
		name: 'John Doe',
		email: 'john.doe@example.com',
		photoURL: 'https://via.placeholder.com/50',
	},
};
const CampaignDetailsPage = () => {
	const [formData, setFormData] = useState({
		amount: '',
		message: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const {
		imageUrl,
		title,
		type,
		message,
		minDonation,
		deadline,
		currentDonation,
		target,
		author,
	} = mockCampaign;
	const handleDonate = () => {
		alert('Thanks for donating!');
	};

	const donationProgress = Math.min((currentDonation / target) * 100, 100);

	return (
		<section className="max-w-4xl mx-auto px-4">
			<div className="p-6 bg-white shadow-md rounded-lg">
				{/* Campaign Image */}
				<div className="w-full h-72 overflow-hidden rounded-lg mb-6">
					<img
						src={KidsImage}
						alt={title}
						className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
					/>
				</div>
				{/* Campaign Info */}
				<h1 className="text-3xl font-bold mb-2">{title}</h1>
				<p className="badge text-sm text-gray-500 uppercase tracking-wider mb-4">
					{type}
				</p>
				<div className="mb-6">
					<div className="flex justify-between mb-2">
						<span className="text-sm font-medium text-gray-600">
							${currentDonation} raised
						</span>
						<span className="text-sm font-medium text-gray-600">
							target: ${target || 0}
						</span>
					</div>
					<div className="w-full bg-gray-200 rounded-full h-4">
						<div
							className="bg-green-500 h-4 rounded-full"
							style={{ width: `${donationProgress}%` }}
						></div>
					</div>
					<p className="text-sm text-gray-500 mt-2">
						Deadline: {new Date(deadline).toLocaleDateString()}
					</p>
				</div>
				<p className="text-gray-700 mb-6">{message}</p>
				{/* Author Info */}
				<div className="flex items-center mb-6">
					<img
						src={author.photoURL || 'https://i.pravatar.cc/50'}
						alt={author.name}
						className="w-10 h-10 rounded-full mr-3"
					/>
					<div>
						<p className="text-sm font-medium">{author.name}</p>
						<p className="text-xs text-gray-500">{author.email}</p>
					</div>
				</div>
				{/* Donation Section */}
				<div className="p-4 bg-gray-100 rounded-lg">
					<div className="w-full">
						<InputField
							label={`Donation Amount(Minimum $${minDonation})`}
							type="number"
							name="amount"
							value={formData.minDonation}
							onChange={handleInputChange}
							placeholder="Enter your donation amount"
							required
						/>
						<TextareaField
							label="message"
							name="message"
							value={formData.message}
							onChange={handleInputChange}
							rows={4}
							placeholder="Say something..."
						/>

						<button
							onClick={handleDonate}
							className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
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
