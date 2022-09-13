export default function bookingFilter(bookingList = [{}], bookingSearch) {
	const bookingListFiltered = bookingList.filter(
		(bookingItem) =>
			bookingItem.from === bookingSearch.from &&
			bookingItem.to === bookingSearch.to &&
			bookingItem.available_guests >= bookingSearch.guests
	);

	return bookingListFiltered;
}
