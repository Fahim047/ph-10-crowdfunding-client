import React from 'react';
import TestimonialCard from './TestimonialCard';
const testimonials = [
	{
		quote:
			'We reached our funding goal in just two weeks! The support we received from the community was incredible. Thanks to CrowdCube, our project is now a reality!',
		name: 'Sarah & Mike',
		title: 'Founders',
		projectName: 'StartupX',
	},
	{
		quote:
			'The tools and resources available helped us create a compelling campaign. We couldn’t have done it without CrowdCube!',
		name: 'John',
		title: 'Creator',
		projectName: 'TechHub',
	},
	{
		quote:
			'CrowdCube gave us the visibility and credibility we needed to scale our idea. The support was unmatched!',
		name: 'Lisa',
		title: 'Founder',
		projectName: 'AgriTech',
	},
];
const Testimonials = () => {
	return (
		<div className="mt-12 text-center">
			<h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
				Success Stories
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{testimonials.map((testimonial, index) => (
					<TestimonialCard
						key={index}
						quote={testimonial.quote}
						name={testimonial.name}
						title={testimonial.title}
						projectName={testimonial.projectName}
					/>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
