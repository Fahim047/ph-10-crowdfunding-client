import { Gift, Globe2, Heart, Users } from 'lucide-react';

export const options = [
	{ value: 'personal', label: 'Personal Issue' },
	{ value: 'startup', label: 'Startup' },
	{ value: 'nonprofit', label: 'Nonprofit' },
	{ value: 'environmental', label: 'Environmental Initiative' },
	{ value: 'research', label: 'Research' },
	{ value: 'religious', label: 'Religious Campaign' },
	{ value: 'orphanage', label: 'Orphanage' },
	{ value: 'charity', label: 'Charity' },
	{ value: 'other', label: 'Other' },
];

export const helpOptions = [
	{
		icon: Users,
		title: 'Help people in need',
		description:
			'Provide support to an individual, family or community by paying medical expenses or offering financial aid.',
	},
	{
		icon: Heart,
		title: 'Take action in an emergency',
		description:
			'Raise funds in response to a natural disaster or humanitarian crisis. Make a difference in minutes.',
	},
	{
		icon: Globe2,
		title: 'Take part in a charity event',
		description:
			'Choose from hundreds of official events including marathons, bike rides, Dryathlons and bake offs...',
	},
	{
		icon: Gift,
		title: 'Celebrate an occasion',
		description:
			'Mark a special event like a birthday, wedding or final exam by asking friends for donations rather than gifts.',
	},
];
