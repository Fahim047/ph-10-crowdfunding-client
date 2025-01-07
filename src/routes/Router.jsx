import { createBrowserRouter } from 'react-router-dom';
import AddCampaign from '../components/AddCampaign';
import MainLayout from '../layouts/MainLayout';
import AboutPage from '../pages/About';
import AllCampaignsPage from '../pages/AllCampaignsPage';
import CampaignDetailsPage from '../pages/CampaignDetailsPage';
import ContactUsPage from '../pages/ContactUs';
import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import MyCampaignsPage from '../pages/MyCampaignsPage';
import MyDonationsPage from '../pages/MyDonationsPage';
import NotFoundPage from '../pages/NotFound';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
	{
		path: '',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
			{
				path: '/campaigns',
				element: <AllCampaignsPage />,
			},
			{
				path: '/campaigns/:campaignId',
				element: (
					<PrivateRoutes>
						<CampaignDetailsPage />
					</PrivateRoutes>
				),
			},
			{
				path: '/add-campaign',
				element: (
					<PrivateRoutes>
						<AddCampaign />,
					</PrivateRoutes>
				),
			},
			{
				path: '/my-campaigns',
				element: (
					<PrivateRoutes>
						<MyCampaignsPage />
					</PrivateRoutes>
				),
			},
			{
				path: '/my-donations',
				element: (
					<PrivateRoutes>
						<MyDonationsPage />
					</PrivateRoutes>
				),
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/register',
				element: <RegisterPage />,
			},
			{
				path: '/contact',
				element: <ContactUsPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);

export default router;
