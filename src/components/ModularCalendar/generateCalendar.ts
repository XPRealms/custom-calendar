export type WeekDay = {
   name: string
   isWeekend: boolean
}

export type Month = {
   name: string
   dayCount: number
}

type Day = {
   day: number
   dayOfWeek: string
   isWeekend: boolean
   isNextMonth: boolean
   isPrevMonth: boolean
}

type MonthDays = Day[]

type Calendar = {
   month: string
   year: number
   weeks: MonthDays[]
}

type GeneratedCalendar = {
   days: Calendar[]
   weekHeader: string[]
}

export function generateCalendar(weekDays: WeekDay[], months: Month[], currentYear: number = 0): GeneratedCalendar {
   const daysInWeek = weekDays.length
   const days: Calendar[] = []
   const weekendsDays = weekDays.filter((day) => day.isWeekend).map((day) => day.name)

   const longestMonthDayCount = Math.max(...months.map((month) => month.dayCount))

   const maxWeeks = Math.ceil(longestMonthDayCount / daysInWeek)

   let currentStartDayIndex = 0

   for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
      const month = months[monthIndex]
      const monthDays: MonthDays[] = []
      const totalDaysInMonth = month.dayCount

      let currentDay = 1
      let overFlowNextDays = 1
      let overFlowPrevDays = 1

      for (let weekIndex = 0; weekIndex < maxWeeks; weekIndex++) {
         const weekDaysInMonth: Day[] = []

         for (let dayIndex = 0; dayIndex < daysInWeek; dayIndex++) {
            const dayOfWeek = weekDays[dayIndex].name

            if (weekIndex === 0 && dayIndex < currentStartDayIndex) {
               weekDaysInMonth.push({
                  day: overFlowPrevDays,
                  dayOfWeek,
                  isWeekend: false,
                  isNextMonth: false,
                  isPrevMonth: true,
               })

               overFlowPrevDays++
               //
            } else if (currentDay <= totalDaysInMonth) {
               weekDaysInMonth.push({
                  day: currentDay,
                  dayOfWeek,
                  isWeekend: weekendsDays.includes(dayOfWeek),
                  isNextMonth: false,
                  isPrevMonth: false,
               })
               currentDay++
            } else {
               weekDaysInMonth.push({
                  day: overFlowNextDays,
                  dayOfWeek,
                  isWeekend: false,
                  isNextMonth: true,
                  isPrevMonth: false,
               })

               overFlowNextDays++
            }
         }

         monthDays.push(weekDaysInMonth)
      }

      currentStartDayIndex = (currentStartDayIndex + totalDaysInMonth) % daysInWeek

      days.push({
         month: month.name,
         year: currentYear,
         weeks: monthDays,
      })
   }

   return { days, weekHeader: weekDays.map((day) => day.name) }
}

export { months, weekDays } from "./sampleCalendar"
