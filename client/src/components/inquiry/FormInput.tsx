import React from "react";

interface FormInputProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
	inputs: {
		label: string;
		required?: boolean;
		type: string;
		name: string;
		values?: Array<string>;
		textarea?: boolean;
	}[];
	handleBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	error?: { [key: string]: string };
}

const FormInput = ({ onChange, handleBlur, inputs, error = {} }: FormInputProps): React.JSX.Element => {
	return (
		<div className="mb-6">
			{inputs.map(input => (
				<div key={input.name} className="mb-4">
					<label htmlFor={input.name} className="block text-sm font-medium text-gray-700">
						{input.label}
					</label>

					{/* eslint-disable-next-line no-nested-ternary */}
					{input.type === "select" ? (
						<select
							id={input.name}
							name={input.name}
							onChange={onChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						>
							<option value="">Select an option</option>
							{input.values?.map((value, index) => (
								<option key={index} value={value}>
									{value}
								</option>
							))}
						</select>
					) : input.type === "textarea" ? (
						<textarea
							onBlur={handleBlur}
							id={input.name}
							name={input.name}
							onChange={onChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					) : (
						<input
							onBlur={handleBlur}
							type={input.type}
							id={input.name}
							name={input.name}
							onChange={onChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					)}
					{error[input.name] && <p className="text-red-500 text-sm mt-1">{error[input.name]}</p>}
				</div>
			))}
		</div>
	);
};

export default FormInput;
