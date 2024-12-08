import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../contexts';
import auth, { googleProvider } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const handleSignInWithGoogle = async () => {
		return signInWithPopup(auth, googleProvider);
	};
	const handleLogout = () => {
		return signOut(auth);
	};
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const handleUpdateProfile = (updatedData) => {
		return updateProfile(auth.currentUser, updatedData);
	};
	const handleSignInWithEmail = async (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const authInfo = useMemo(
		() => ({
			user,
			setUser,
			loading,
			handleSignInWithGoogle,
			handleLogout,
			createUser,
			handleUpdateProfile,
			handleSignInWithEmail,
		}),
		[user, loading]
	);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, [user]);
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
