import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import { useAuth } from '../hooks';

const MainLayout = () => {
	const { loading } = useAuth();
	if (loading)
		return (
			<div className="flex min-h-screen items-center justify-center">
				<Loader />
			</div>
		);
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default MainLayout;
