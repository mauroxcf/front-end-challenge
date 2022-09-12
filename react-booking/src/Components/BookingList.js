import React from 'react';
import PropTypes from 'prop-types';
import BookingItem from './BookingItem';

function BookingList({ setShowModal }) {
	return (
		<div className='flex flex-col gap-4'>
			<BookingItem setShowModal={setShowModal} />
			<BookingItem setShowModal={setShowModal} />
			<BookingItem setShowModal={setShowModal} />
			<BookingItem setShowModal={setShowModal} />
		</div>
	);
}

BookingList.propTypes = {};

export default BookingList;
