/**
 * It filters a list of bookings by comparing the search criteria with the booking list.
 * @param bookingList - [{},{},{}] contains all the bookings flights
 * @param bookingSearch - object with information content to filter the flights
 * @returns An array of objects with the filtered flights.
 */
export default function bookingFilter(bookingList = [{}], bookingSearch) {
	const bookingListFiltered = bookingList.filter(
		(bookingItem) =>
			bookingItem.from === bookingSearch.from &&
			bookingItem.to === bookingSearch.to &&
			bookingItem.departureDate >= bookingSearch.check_in &&
			bookingItem.departureDate <= bookingSearch.check_out &&
			bookingItem.available_guests >= bookingSearch.guests
	);
	return bookingListFiltered;
}
