import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

//UI
import FormItem from './FormItem';

//BL
import { formInitialValues } from '../Assets/Data';

/**
 * It's a function that returns a booking form using formik library
 * @param props - {
 * @returns A Form component that has a FormItem component for each field.
 */
function BookingForm(props) {
	return (
		<div className='py-4 px-6 md:rounded-full bg-gray-100 md:w-fit md:mx-auto'>
			<Formik
				initialValues={formInitialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{() => (
					<Form className='flex flex-col md:flex-row gap-3'>
						<FormItem labelText='From:' fieldName='from' />
						<FormItem labelText='To:' fieldName='to' />
						<FormItem labelText='Check-in' fieldName='check_in' />
						<FormItem labelText='Check-out' fieldName='check_out' />
						<FormItem labelText='Guests' fieldName='guests' />
						<button
							className='cursor-pointer text-xs md:text-sm rounded-full bg-sky-200 py-2 hover:bg-sky-300 w-28 text-center mt-auto'
							type='submit'
						>
							Search
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

BookingForm.propTypes = {};

export default BookingForm;
