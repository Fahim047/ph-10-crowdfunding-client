import { useMemo, useState } from 'react';
import { ThemeContext } from '../contexts';

const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const themeData = useMemo(
		() => ({ darkMode, setDarkMode }),
		[darkMode, setDarkMode]
	);
	return (
		<ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
