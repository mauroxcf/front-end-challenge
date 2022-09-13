import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

//UI
import FormItem from './FormItem';

//BL
import { formInitialValues } from '../Assets/Data';
import bookingFilter from '../utils/BookingFilter';
import { bookingList } from '../Assets/dummyData';

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
				onSubmit={(values) => {
					setFilterBookingList(bookingFilter(bookingList, values));
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
							onClick={() => setShowBookingList(showBookingList + 1)}
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
