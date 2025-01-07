// TestimonialCard.js
const TestimonialCard = ({ quote, name, title, projectName }) => {
	return (
		<div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center">
			<blockquote className="text-gray-600 dark:text-gray-300 italic text-lg mb-4">
				"{quote}"
			</blockquote>
			<p className="text-gray-700 dark:text-gray-100 font-semibold text-xl">
				{name}
			</p>
			<p className="text-gray-600 dark:text-gray-300">
				{title} of {projectName}
			</p>
		</div>
	);
};

export default TestimonialCard;
