type WeekDay = {
  name: string;
  isWeekend: boolean;
};

type Month = {
  name: string;
};

type Day = {
  day: number;
  dayOfWeek: string;
  isWeekend: boolean;
};

type MonthDays = Day[];

type Calendar = {
  month: string;
  year: number;
  weeks: MonthDays[];
};

type GeneratedCalendar = {
  days: Calendar[]
  weekHeader: string[] 
}

export function generateCalendar(
  weekDays: WeekDay[],
  months: Month[],
  currentYear: number = 0,
  monthsLength: number = 3
): GeneratedCalendar {
  const daysInWeek = weekDays.length;
  const weeksInMonth = monthsLength;
  const days: Calendar[] = [];

  for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
    const month = months[monthIndex];
    const monthDays: MonthDays[] = [];

    for (let weekIndex = 0; weekIndex < weeksInMonth; weekIndex++) {
      const weekDaysInMonth: Day[] = [];

      for (let dayIndex = 0; dayIndex < daysInWeek; dayIndex++) {
        const dayNumber = weekIndex * daysInWeek + dayIndex + 1;
        const dayOfWeek = weekDays[dayIndex];

        weekDaysInMonth.push({
          day: dayNumber,
          dayOfWeek: dayOfWeek.name,
          isWeekend: dayOfWeek.isWeekend,
        });
      }

      monthDays.push(weekDaysInMonth);
    }

    days.push({
      month: month.name,
      year: currentYear,
      weeks: monthDays,
    });
  }

  return {days, weekHeader : weekDays.map( (day) => day.name ) };
}

export { months, weekDays } from './sampleCalendar'