import { createBrowserRouter } from 'react-router-dom';
import AddCampaign from '../components/AddCampaign';
import MainLayout from '../layouts/MainLayout';
import AllCampaignsPage from '../pages/AllCampaignsPage';
import CampaignDetailsPage from '../pages/CampaignDetailsPage';
import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
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
				path: '/campaigns/:id',
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
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/register',
				element: <RegisterPage />,
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);

export default router;
