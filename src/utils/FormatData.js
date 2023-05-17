export const FormatTime = (minutes) => {
	let hours = Math.floor(minutes / 60);
	let minutesLeft = minutes % 60;
	let result = `${hours}h ${minutesLeft}min`;

	return result;
};

export const FormatDate = (date) => {
	const year = new Date(date).getFullYear();
	return year;
};
