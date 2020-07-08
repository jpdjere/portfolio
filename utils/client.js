export const createDateMinus6Months = (lastDay) => {
	const firstDay = new Date();
	firstDay.setDate(1);
	firstDay.setMonth(lastDay.getMonth() - 6);

	return firstDay;
}

export const createDateWithDiff = (date, monthsDiff) => new Date(date).setMonth(new Date(date).getMonth() + monthsDiff);