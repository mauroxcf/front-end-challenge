import React from 'react';
import PropTypes from 'prop-types';

function BookingDetails({ setShowModal }) {
	return (
		<div className='fixed inset-0 flex items-center justify-center z-50'>
			<div className='bg-white w-4/5 sm:w-3/5 lg:w-2/5 h-fit z-10 rounded-lg'>
				<div className='flex flex-col w-full gap-2 p-4 text-base sm:text-lg'>
					<div className='flex flex-row items-center justify-between'>
						<p className='font-bold'>Flight details</p>
						<button
							className='cursor-pointer hover:bg-slate-50 w-12 p-2 text-lg text-center mt-auto'
							onClick={() => setShowModal(false)}
						>
							X
						</button>
					</div>
					<p>Flight: 0000</p>
					<p>From: Cartagena</p>
					<p>To: Bucaramanga</p>
					<p>1 stop</p>
					<p>Flight duration: 1hr</p>

					<button
						className='cursor-pointer bg-sky-300 hover:bg-sky-500 w-28 p-2 text-lg text-center mt-auto'
						onClick={() => setShowModal(false)}
					>
						Close
					</button>
				</div>
			</div>

			<div className='opacity-25 fixed inset-0 bg-black'></div>
		</div>
	);
}

BookingDetails.propTypes = {};

export default BookingDetails;
