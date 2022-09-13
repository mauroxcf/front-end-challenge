import React from 'react';
import PropTypes from 'prop-types';

//UI
import airplane from '../../Assets/icons/airplane.png';

/**
 * renders a component using the booking data, city, date, flight, etc.
 * @returns A short booking description of the flight.
 */
function BookingItem({ bookingInfo, setShowModal, setSingleFlight }) {
	return (
		<div
			className='cursor-pointer flex flex-row justify-between bg-gray-200 hover:bg-gray-300 rounded-xl'
			onClick={() => {
				setSingleFlight(bookingInfo);
				setShowModal(true);
			}}
		>
			<div className='flex flex-row w-4/5 justify-between p-4'>
				<div className='w-1/5 flex flex-col justify-center gap-1 text-base sm:text-lg'>
					<p>{bookingInfo.from}</p>
					<p>{bookingInfo.departureTime}</p>
				</div>
				<div className='w-3/5 flex flex-col items-center text-base sm:text-lg px-2'>
					<p>{bookingInfo.flight}</p>
					<div className='flex flex-row w-full'>
						<div className='border-b-2 mr-2 border-dashed border-black h-6 w-full'></div>
						<img src={airplane} alt='flight' width={48} height={48} />
						<div className='border-b-2 ml-2 border-dashed border-black h-6 w-full'></div>
					</div>
					<p>Low Price</p>
				</div>
				<div className='w-1/5 flex flex-col justify-center gap-1 text-base sm:text-lg'>
					<p>{bookingInfo.to}</p>
					<p>{bookingInfo.arriveTime}</p>
				</div>
			</div>
			<div className='w-1/5 flex items-center py-2 bg-sky-300 rounded-xl'>
				<p className='w-full text-base sm:text-lg text-center'>{`${bookingInfo.currencySymbol} ${bookingInfo.price} ${bookingInfo.currency}`}</p>
			</div>
		</div>
	);
}

BookingItem.propTypes = {
	/* object that contents flight information */
	bookingInfo: PropTypes.object,
	/* function that handle to show or not the modal */
	setShowModal: PropTypes.func,
	/* setstate to save a flight object info */
	setSingleFlight: PropTypes.func,
};

export default BookingItem;
