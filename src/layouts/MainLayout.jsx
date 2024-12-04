import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
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
			<div className="my-10">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
