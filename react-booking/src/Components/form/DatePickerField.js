import React from 'react';
import { useField, useFormikContext, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import formatDate from '../../utils/formattedDate';

function DatePickerField({ ...props }) {
	const { setFieldValue } = useFormikContext();
	const [field] = useField(props);
	return (
		<div className='flex flex-col gap-2'>
			<label className='text-sm font-medium text-gray-900 dark:text-gray-300'>
				{props.labelText}
			</label>
			<DatePicker
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
				{...field}
				{...props}
				selected={(field.value && new Date(field.value)) || null}
				onChange={(val) => {
					setFieldValue(field.name, formatDate(val));
				}}
			/>
			<ErrorMessage
				className='text-sm text-red-400'
				name={field.name}
				component='div'
			/>
		</div>
	);
}

export default DatePickerField;
