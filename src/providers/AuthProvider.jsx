import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../contexts';
import auth, { googleProvider } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const handleSignInWithGoogle = async () => {
		return signInWithPopup(auth, googleProvider);
	};

	const authInfo = useMemo(
		() => ({ user, setUser, loading, handleSignInWithGoogle }),
		[user, loading]
	);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, [user]);
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
