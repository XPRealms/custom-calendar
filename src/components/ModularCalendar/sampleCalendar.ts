import type { Month, WeekDay } from "./generateCalendar"

export const weekDays: WeekDay[] = [
   { name: "Pre", isWeekend: true },
   { name: "Mid", isWeekend: false },
   { name: "Duno", isWeekend: false },
   { name: "Trino", isWeekend: false },
   { name: "Sonus", isWeekend: false },
   { name: "Top", isWeekend: true },
]

export const months: Month[] = [
   { name: "Rabbit", dayCount: 14 },
   { name: "Crane", dayCount: 7 },
   { name: "Wolf", dayCount: 14 },
   { name: "Snake", dayCount: 6 },
   { name: "Dragon", dayCount: 10 },
]

// export const weekDays: WeekDay[] = [
//    { name: "Pre", isWeekend: true },
//    { name: "Mid", isWeekend: false },
//    { name: "Uno", isWeekend: false },
//    { name: "Duno", isWeekend: false },
//    { name: "Trino", isWeekend: false },
//    { name: "Sonus", isWeekend: false },
//    { name: "Top", isWeekend: true },
// ]

// export const months: Month[] = [
//    { name: "Rabbit", dayCount: 28 },
//    { name: "Crane", dayCount: 31 },
//    { name: "Wolf", dayCount: 30 },
//    { name: "Snake", dayCount: 29 },
//    { name: "Dragon", dayCount: 30 },
// ]
