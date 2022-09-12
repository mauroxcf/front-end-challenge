import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

/**
 * It's a function that returns a div with a label, a field, and an error message
 * @returns A React component that renders a form item.
 */
function FormItem({ labelText, fieldType, fieldName }) {
	return (
		<div className='flex flex-col gap-2'>
			<label className='text-sm font-medium text-gray-900 dark:text-gray-300'>
				{labelText}
			</label>
			<Field
				type={fieldType}
				name={fieldName}
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
			/>
			<ErrorMessage name={fieldName} component='div' />
		</div>
	);
}

FormItem.propTypes = {
	/* label of the form element */
	labelText: PropTypes.string,
	/* type of the input */
	fieldType: PropTypes.string,
	/* field name to hook in the form */
	fieldName: PropTypes.string,
};

FormItem.defaultProps = {
	fieldType: '',
};

export default FormItem;
