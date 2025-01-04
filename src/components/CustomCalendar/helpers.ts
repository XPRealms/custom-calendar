import dayjs from "dayjs"

export function generateCalendar() {
  const today = dayjs()
  const currentMonth = today.startOf("month")
  const daysInMonth = currentMonth.daysInMonth()
  const days = Array.from({ length: daysInMonth }, (_, i) => currentMonth.add(i, "day"))

  return {days, today,currentMonth, daysInMonth}
}