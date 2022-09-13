import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

//UI
import FormItem from './FormItem';
import DatePickerField from './DatePickerField';

//BL
import { formInitialValues, formValidationSchema } from '../../Assets/Data';
import bookingFilter from '../../utils/BookingFilter';
import { bookingList } from '../../Assets/dummyData';

/**
 * It's a function that returns a booking form using formik library
 * @returns A Form component that has a FormItem component for each field.
 */
function BookingForm({
	showBookingList,
	setShowBookingList,
	setFilterBookingList,
}) {
	return (
		<div className='py-4 px-6 md:rounded-full bg-gray-100 md:w-fit md:mx-auto'>
			<Formik
				initialValues={formInitialValues}
				validationSchema={formValidationSchema}
				onSubmit={(values) => {
					if (values) {
						setFilterBookingList(bookingFilter(bookingList, values));
						setShowBookingList(showBookingList + 1);
					}
				}}
			>
				{() => (
					<Form className='flex flex-col md:flex-row gap-3'>
						<FormItem labelText='From:' fieldName='from' />
						<FormItem labelText='To:' fieldName='to' />
						<DatePickerField labelText='Check-in' name='check_in' />
						<DatePickerField labelText='Check-out' name='check_out' />
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

BookingForm.propTypes = {
	/* useState to handle the search booking request */
	showBookingList: PropTypes.number,
	/* function that change the value to show the booking list */
	setShowBookingList: PropTypes.func,
	/* useState to handle the new value of the filter data */
	setFilterBookingList: PropTypes.func,
};

export default BookingForm;
