import { useState } from 'react';
import { toast } from 'react-toastify';
import { options } from '../data/data';
import { useAuth } from '../hooks';
import InputField from './Forms/InputField';
import SelectField from './Forms/SelectField';
import TextareaField from './Forms/TextAreaField';
const AddCampaign = () => {
	const { user } = useAuth();
	const [formData, setFormData] = useState({
		imageURL: '',
		title: '',
		type: 'personal issue',
		description: '',
		minDonation: 10,
		targetAmount: 100,
		deadline: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!user?.email || !user?.displayName) return;

		const newCampaign = {
			...formData,
			minDonation: Number(formData.minDonation),
			author: {
				name: user?.displayName,
				email: user?.email,
				photoURL: user?.photoURL,
			},
		};
		const response = await fetch(
			`${import.meta.env.VITE_API_BASE_URL}/api/v1/campaigns`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newCampaign),
			}
		);
		if (response.ok) {
			const data = await response.json();
			toast.success('Campaign added successfully!');
			setFormData({
				imageURL: '',
				title: '',
				type: 'personal issue',
				description: '',
				minDonation: 10,
				targetAmount: 100,
				deadline: '',
			});
		}
	};

	return (
		<div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6 text-center">Add New Campaign</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<InputField
					label="Image URL"
					type="url"
					name="imageURL"
					value={formData.imageURL}
					onChange={handleInputChange}
					placeholder="Enter image URL"
					required
				/>
				<InputField
					label="Campaign Title"
					type="text"
					name="title"
					value={formData.title}
					onChange={handleInputChange}
					placeholder="Enter campaign title"
					required
				/>
				<SelectField
					label="Campaign Type"
					name="type"
					value={formData.type}
					onChange={handleInputChange}
					options={options}
				/>
				<TextareaField
					label="Description"
					name="description"
					value={formData.description}
					onChange={handleInputChange}
					rows={4}
					placeholder="Write a brief description..."
				/>
				<InputField
					label="Minimum Donation Amount ($)"
					type="number"
					min="10"
					name="minDonation"
					value={formData.minDonation}
					onChange={handleInputChange}
					placeholder="Enter minimum donation amount"
					required
				/>
				<InputField
					label="Target Amount ($)"
					type="number"
					name="targetAmount"
					min="100"
					value={formData.targetAmount}
					onChange={handleInputChange}
					placeholder="Enter target amount"
					required
				/>
				<InputField
					label="Deadline"
					type="date"
					name="deadline"
					value={formData.deadline}
					onChange={handleInputChange}
					required
				/>
				<InputField
					label="User Email"
					type="email"
					name="userEmail"
					value={user?.email}
					readOnly
				/>
				<InputField
					label="User Name"
					type="text"
					name="userName"
					value={user?.displayName}
					readOnly
				/>
				<div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddCampaign;
