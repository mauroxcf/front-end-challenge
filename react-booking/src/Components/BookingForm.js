import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

function BookingForm(props) {
	return (
		<div className='py-4 px-6 rounded-full bg-gray-100 w-fit mx-auto'>
			<Formik
				initialValues={{}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ isSubmitting }) => (
					<Form className='flex flex-row gap-3'>
						<div className='flex flex-col gap-2'>
							<label
								className='text-sm font-medium text-gray-900 dark:text-gray-300'
								htmlFor='from'
							>
								From:
							</label>
							<Field
								type='from'
								name='from'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
							/>
							<ErrorMessage name='from' component='div' />
						</div>
						<div className='flex flex-col gap-2'>
							<label
								className='text-sm font-medium text-gray-900 dark:text-gray-300'
								htmlFor='to'
							>
								To:
							</label>
							<Field
								type='to'
								name='to'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
							/>
							<ErrorMessage name='to' component='div' />
						</div>
						<div className='flex flex-col gap-2'>
							<label
								className='text-sm font-medium text-gray-900 dark:text-gray-300'
								htmlFor='to'
							>
								Check-in
							</label>
							<Field
								type='to'
								name='to'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
							/>
							<ErrorMessage name='to' component='div' />
						</div>
						<div className='flex flex-col gap-2'>
							<label
								className='text-sm font-medium text-gray-900 dark:text-gray-300'
								htmlFor='to'
							>
								Check-out
							</label>
							<Field
								type='to'
								name='to'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
							/>
							<ErrorMessage name='to' component='div' />
						</div>
						<div className='flex flex-col gap-2'>
							<label
								className='text-sm font-medium text-gray-900 dark:text-gray-300'
								htmlFor='to'
							>
								Guests
							</label>
							<Field
								type='to'
								name='to'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
							/>
							<ErrorMessage name='to' component='div' />
						</div>
						<button
							className='cursor-pointer text-xs md:text-sm rounded-full bg-sky-200 py-2 hover:bg-sky-300 w-28 text-center mt-auto'
							type='submit'
							disabled={isSubmitting}
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
