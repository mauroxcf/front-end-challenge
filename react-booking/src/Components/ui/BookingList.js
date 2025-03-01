import React from 'react';
import PropTypes from 'prop-types';
import BookingItem from './BookingItem';

/**
 * It takes in a prop called filterBookingList, which is an array of objects, and maps over it to
 * create a BookingItem component for each object in the array.
 * @returns A list of BookingItems
 */
function BookingList({ filterBookingList, setShowModal, setSingleFlight }) {
	return (
		<div className='flex flex-col gap-4'>
			{filterBookingList ? (
				filterBookingList.map((bookingInfo, index) => (
					<BookingItem
						key={index}
						bookingInfo={bookingInfo}
						setShowModal={setShowModal}
						setSingleFlight={setSingleFlight}
					/>
				))
			) : (
				<div>No content to show</div>
			)}
		</div>
	);
}

BookingList.propTypes = {
	/* filtered array of objects with flights information to render */
	filterBookingList: PropTypes.array,
	/* function to change the state of show modal */
	setShowModal: PropTypes.func,
	/* setstate to save a flight object info */
	setSingleFlight: PropTypes.func,
};

export default BookingList;
