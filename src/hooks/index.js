import { useContext } from 'react';
import { AuthContext } from '../contexts';

const useAuth = () => {
	const context = useContext(AuthContext);
	return context;
};

export { useAuth };
