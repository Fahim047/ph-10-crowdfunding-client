const TextareaField = ({ label, name, value, onChange, rows, placeholder }) => {
	return (
		<div className="mb-2">
			<label htmlFor={name} className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			<textarea
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				rows={rows}
				placeholder={placeholder}
				className="mt-1 p-2 block w-full rounded-md border outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			></textarea>
		</div>
	);
};

export default TextareaField;
