import React from 'react';
import PropTypes from 'prop-types';

//UI
import airplane from '../Assets/icons/airplane.png';

/**
 * renders a component using the booking data, city, date, flight, etc.
 * @param props - {
 * @returns A short booking description of the flight.
 */
function BookingItem({ setShowModal }) {
	return (
		<div
			className='cursor-pointer flex flex-row justify-between bg-gray-200 hover:bg-gray-300 rounded-xl'
			onClick={() => setShowModal(true)}
		>
			<div className='flex flex-row w-4/5 justify-between p-4'>
				<div className='w-1/5 flex flex-col justify-center gap-1 text-base sm:text-lg'>
					<p>CIUDAD</p>
					<p>HORA 00:00AM</p>
				</div>
				<div className='w-3/5 flex flex-col items-center text-base sm:text-lg px-2'>
					<p>VUELO 000</p>
					<div className='flex flex-row w-full'>
						<div className='border-b-2 mr-2 border-dashed border-black h-6 w-full'></div>
						<img src={airplane} alt='flight' width={48} height={48} />
						<div className='border-b-2 ml-2 border-dashed border-black h-6 w-full'></div>
					</div>
					<p>TARIFA</p>
				</div>
				<div className='w-1/5 flex flex-col justify-center gap-1 text-base sm:text-lg'>
					<p>CIUDAD</p>
					<p>HORA 00:00AM</p>
				</div>
			</div>
			<div className='w-1/5 flex items-center py-2 bg-sky-300 rounded-xl'>
				<p className='w-full text-base sm:text-lg text-center'>$124.000 COP</p>
			</div>
		</div>
	);
}

BookingItem.propTypes = {};

export default BookingItem;