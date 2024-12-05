const SelectField = ({ label, name, value, onChange, options }) => (
	<div>
		<label htmlFor={name} className="block text-sm font-medium text-gray-700">
			{label}
		</label>
		<select
			name={name}
			id={name}
			value={value}
			onChange={onChange}
			className="mt-1 p-2 block w-full rounded-md border outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
		>
			{options.map((option, index) => (
				<option key={index} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	</div>
);

export default SelectField;
