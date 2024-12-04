import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFound';
import RegisterPage from '../pages/RegisterPage';

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
