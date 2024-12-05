const InputField = ({
	label,
	type,
	name,
	value,
	onChange,
	readOnly,
	placeholder,
	...rest
}) => {
	return (
		<div className="mb-2">
			<label htmlFor={name} className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				readOnly={readOnly}
				placeholder={placeholder}
				{...rest}
				className={`mt-1 p-2 block w-full rounded-md border outline-none ${
					readOnly ? 'bg-gray-100' : 'border-gray-300'
				} focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
			/>
		</div>
	);
};
export default InputField;
