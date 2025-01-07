const SelectField = ({ label, name, value, onChange, options }) => (
	<div>
		<label
			htmlFor={name}
			className="block text-sm font-medium text-gray-700 dark:text-gray-300"
		>
			{label}
		</label>
		<select
			name={name}
			id={name}
			value={value}
			onChange={onChange}
			className="mt-1 p-2 block w-full rounded-md border outline-none 
      border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 
      text-gray-700 dark:text-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 sm:text-sm"
		>
			{options.map((option, index) => (
				<option
					key={index}
					value={option.value}
					className="dark:bg-gray-800 dark:text-gray-100"
				>
					{option.label}
				</option>
			))}
		</select>
	</div>
);

export default SelectField;
