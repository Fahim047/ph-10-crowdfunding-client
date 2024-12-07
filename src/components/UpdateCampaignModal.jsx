import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../hooks';
import InputField from './Forms/InputField';
import SelectField from './Forms/SelectField';
import TextareaField from './Forms/TextAreaField';

const UpdateCampaignModal = ({
	isOpen,
	onClose,
	campaignId,
	existingData,
	setCampaigns,
}) => {
	const [formData, setFormData] = useState(existingData || {});
	const { user } = useAuth();

	useEffect(() => {
		if (existingData) {
			const formattedDeadline = new Date(existingData.deadline)
				.toISOString()
				.split('T')[0];
			setFormData({ ...existingData, deadline: formattedDeadline });
		}
	}, [existingData]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				`http://localhost:8000/api/v1/campaigns/${campaignId}`,
				{
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				const data = await response.json();
				const updatedCampaign = data.data;
				toast.success('Campaign updated successfully!');
				setCampaigns((prevCampaigns) =>
					prevCampaigns.map((c) => (c._id === campaignId ? updatedCampaign : c))
				);
				onClose();
			} else {
				toast.error('Failed to update campaign. Please try again.');
			}
		} catch (error) {
			console.error('Error updating campaign:', error);
			toast.error('An error occurred while updating.');
		}
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="modal-box bg-white rounded-lg shadow-lg p-6">
				<h1 className="text-2xl font-bold mb-6 text-center">Update Campaign</h1>
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
						options={[
							{ value: 'personal issue', label: 'Personal Issue' },
							{ value: 'startup', label: 'Startup' },
							{ value: 'business', label: 'Business' },
							{ value: 'creative ideas', label: 'Creative Ideas' },
						]}
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
					<div className="modal-action flex justify-end gap-4">
						<button
							type="submit"
							className="py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Update
						</button>
						<button
							type="button"
							onClick={onClose}
							className="py-2 px-4 bg-gray-300 text-black font-medium rounded-md hover:bg-gray-400 focus:outline-none"
						>
							Close
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateCampaignModal;
