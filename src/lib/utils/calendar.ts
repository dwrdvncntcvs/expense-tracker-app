interface JsonDate {
    day: number
    date: number
    year: number
    month: number
    monthName: string
    weekDayName: string
    dateStr: string
}

const WEEK_DAYS = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
};

const MONTHS = {
    JANUARY: 0,
    FEBRUARY: 1,
    MARCH: 2,
    APRIL: 3,
    MAY: 4,
    JUNE: 5,
    JULY: 6,
    AUGUST: 7,
    SEPTEMBER: 8,
    OCTOBER: 9,
    NOVEMBER: 10,
    DECEMBER: 11,
};

export const weekDaysName = Object.keys(WEEK_DAYS)
export const monthsName = Object.keys(MONTHS)

export const getWeekDaysName = (options?: { nameLength?: number }) => {
    if (options?.nameLength)
        return weekDaysName.map(val => val.slice(0, options.nameLength))

    return weekDaysName
}

export const parseDate = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export const generateJsonDate = (date: Date): JsonDate => {
    return {
        day: date.getDay(),
        date: date.getDate(),
        year: date.getFullYear(),
        month: date.getMonth(),
        monthName: monthsName[date.getMonth()],
        weekDayName: weekDaysName[date.getDay()],
        dateStr: parseDate(date)
    }
}

export const parseJsonDate = (jsonDate: JsonDate): Date => {
    const { date, month, year } = jsonDate
    return new Date(year, month, date)
}

export const generateDays = (month: number, year: number) => {
    let calendarDates = []

    let calendarDate = new Date(year, month, 0)
    const calendarLastDate = new Date(year, month + 1, 0)

    while (calendarDate < calendarLastDate) {
        calendarDate.setDate(calendarDate.getDate() + 1)
        const json_date = generateJsonDate(calendarDate)
        calendarDates.push(json_date)
    }

    return calendarDates
};


