export const validatePassword = (password, confirmPassword) => {
	const errors = [];

	if (password !== confirmPassword) {
		errors.push('Passwords do not match');
	}
	if (password.length < 6) {
		errors.push('Password must be at least 6 characters');
	}
	if (!/[a-z]/.test(password)) {
		errors.push('Password must contain at least one lowercase letter');
	}
	if (!/[A-Z]/.test(password)) {
		errors.push('Password must contain at least one uppercase letter');
	}
	if (!/\d/.test(password)) {
		errors.push('Password must contain at least one number');
	}

	return errors;
};
