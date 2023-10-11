export type DateTime = Date | string | number;

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const getDaysInYear = (year: number): number => {
	if (year % 400 === 0) {
		return 366;
	}
	if (year % 100 === 0) {
		return 365;
	}
	if (year % 4 === 0) {
		return 366;
	}
	return 365;
};

const getDaysInYearAverage = (timeStart: number, timeEnd: number): number => {
	const yearStart = new Date(timeStart).getFullYear();
	const yearEnd = new Date(timeEnd).getFullYear();

	let acc = 0;
	for (let i = yearStart; i < yearEnd; i++) {
		acc += getDaysInYear(i);
	}

	return acc / (yearEnd - yearStart);
};

const getTimeOrThrowError = (dt: DateTime): number => {
	const time = new Date(dt).getTime();
	if (isNaN(time)) {
		throw new Error(`Invalid Date: ${dt}`);
	}
	return time;
};

/**
 * The function returns the difference of two dates in the form of a decimal year.
 * @param {DateTime} dtStart Start date or time, must be less than or equal to the dtEnd.
 * @param {DateTime} dtEnd End date or time.
 */
const getDeltaYear = (dtStart: DateTime, dtEnd: DateTime): number => {
	const timeStart = getTimeOrThrowError(dtStart);
	const timeEnd = getTimeOrThrowError(dtEnd);

	if (timeStart > timeEnd) {
		throw new Error(
			`The dtStart must be less than or equal to the dtEnd: ${dtStart.toString()} > ${dtEnd.toString()}`
		);
	}

	return (timeEnd - timeStart) / MS_PER_DAY / getDaysInYearAverage(timeStart, timeEnd);
};

export default getDeltaYear;
