import type { Month, WeekDay } from "./helpers/generateCalendar"

export type CalendarAppState = "empty" | "create" | "edit"

export const USER_ROLES = {
   NONE: 0,
   PLAYER: 1,
   TRUSTED: 2,
   ASSISTANT: 3,
   GAMEMASTER: 4,
}

export type CalendarData = {
   month: Month[]
   weekDays: WeekDay[]
   name: string
   isActive: boolean
}
