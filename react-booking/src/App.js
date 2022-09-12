import { useState } from 'react';
import BookingDetails from './Components/BookingDetails';
import BookingForm from './Components/BookingForm';
import BookingList from './Components/BookingList';

function App() {
	const [showModal, setShowModal] = useState(false);
	return (
		<main className='bg-gradient-to-r from-cyan-500 to-blue-500'>
			<div className='flex flex-col gap-4 pb-4 md:pt-4 md:mx-4'>
				<BookingForm />
				<BookingList setShowModal={setShowModal} />
			</div>
			{showModal && <BookingDetails setShowModal={setShowModal} />}
		</main>
	);
}

export default App;
