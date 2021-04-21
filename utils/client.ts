export const createDateMinus6Months = (lastDay: Date) => {
	const firstDay = new Date();
	firstDay.setDate(1);
	firstDay.setMonth(lastDay.getMonth() - 6);

	return firstDay;
}

export const createDateWithDiff = (date: Date, monthsDiff: number) => new Date(new Date(date).setMonth(new Date(date).getMonth() + monthsDiff));