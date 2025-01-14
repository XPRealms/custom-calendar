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

   // Determinar o maior número de dias entre os meses
   const longestMonthDayCount = Math.max(...months.map((month) => month.dayCount))

   // Calcular o número máximo de semanas necessário
   const maxWeeks = Math.ceil(longestMonthDayCount / daysInWeek)

   let currentStartDayIndex = 0 // Índice do dia da semana em que o mês começa (0 = domingo, 1 = segunda, ...)

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
            if (weekIndex === 0 && dayIndex < currentStartDayIndex) {
               // Dias "vazios" antes do início do mês
               weekDaysInMonth.push({
                  day: overFlowPrevDays,
                  dayOfWeek: "",
                  isWeekend: false,
                  isNextMonth: false,
                  isPrevMonth: true,
               })

               overFlowPrevDays++
               //
            } else if (currentDay <= totalDaysInMonth) {
               const dayOfWeek = weekDays[(currentStartDayIndex + dayIndex) % daysInWeek]
               weekDaysInMonth.push({
                  day: currentDay,
                  dayOfWeek: dayOfWeek.name,
                  // isWeekend: weekendsDays.includes(dayOfWeek.name),
                  isWeekend: false,
                  isNextMonth: false,
                  isPrevMonth: false,
               })
               currentDay++
            } else {
               // Dias "vazios" após o término do mês
               weekDaysInMonth.push({
                  day: overFlowNextDays,
                  dayOfWeek: "",
                  isWeekend: false,
                  isNextMonth: true,
                  isPrevMonth: false,
               })

               overFlowNextDays++
            }
         }

         monthDays.push(weekDaysInMonth)
      }

      // Calcular o índice do dia da semana para o próximo mês
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
