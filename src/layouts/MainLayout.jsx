import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import { useAuth, useTheme } from '../hooks';

const MainLayout = () => {
	const { loading } = useAuth();
	const { darkMode } = useTheme();
	if (loading)
		return (
			<div className="flex min-h-screen items-center justify-center">
				<Loader />
			</div>
		);
	return (
		<div className={`${darkMode ? 'dark' : ''}`}>
			<Navbar />
			<div className="my-10 min-h-screen">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
