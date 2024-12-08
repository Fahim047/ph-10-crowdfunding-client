import { helpOptions } from '../data/data';

const FundraisingOptionCard = ({ icon: Icon, title, description }) => (
	<div className="flex flex-col items-start gap-4">
		<div className="p-2 bg-indigo-100 rounded-full">
			<Icon className="w-8 h-8 text-indigo-500" />
		</div>
		<h2 className="text-2xl font-bold">{title}</h2>
		<p className="text-gray-500">{description}</p>
		<button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors">
			START FUNDRAISING
		</button>
	</div>
);
const HowYouCanHelp = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold text-center mb-16">How You Can Help</h1>

			<div className="grid md:grid-cols-2 gap-12">
				{helpOptions.map((option, index) => (
					<FundraisingOptionCard key={index} {...option} />
				))}
			</div>
		</div>
	);
};

export default HowYouCanHelp;
