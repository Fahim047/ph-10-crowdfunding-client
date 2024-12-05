import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import { useAuth } from '../hooks';

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();
	if (loading)
		return (
			<div className="flex min-h-screen items-center justify-center">
				<Loader />
			</div>
		);
	if (user && user?.accessToken) return children;
	return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoutes;
