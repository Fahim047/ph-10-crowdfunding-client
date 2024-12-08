import ActiveCampaigns from '../components/ActiveCampaigns';
import Banner from '../components/Banner';
import BecomeVolunteer from '../components/BecomeVolunteer';
import HowYouCanHelp from '../components/HowYouCanHelp';
import OurMission from '../components/OurMission';
const Homepage = () => {
	return (
		<>
			<Banner />
			<ActiveCampaigns />
			<OurMission />
			<HowYouCanHelp />
			<BecomeVolunteer />
		</>
	);
};

export default Homepage;
