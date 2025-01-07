import { useContext } from 'react';
import { AuthContext, ThemeContext } from '../contexts';

const useAuth = () => {
	const context = useContext(AuthContext);
	return context;
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	return context;
};

export { useAuth, useTheme };
