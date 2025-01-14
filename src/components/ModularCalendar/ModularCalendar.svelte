<script lang="ts">
   import { generateCalendar, months, weekDays } from "./generateCalendar"
   import { getContext } from "svelte"
   import { type CalendarApp } from "../../view/calendar/CalendarApp"

   // Get information from the window - Document it and remove later
   const application = getContext<CalendarApp.External>("#external").application
   const { width: windowWidth } = application.position.stores

   let currentYear = 0
   let currentMonthIndex = 0
   const { days, weekHeader } = generateCalendar(weekDays, months, currentYear)
   let calendar = days

   // Atualizar o calendário
   function updateCalendar() {
      calendar = generateCalendar(weekDays, months, currentYear).days
   }

   // Navegar para o próximo mês
   function nextMonth() {
      if (currentMonthIndex < months.length - 1) {
         currentMonthIndex++
      } else {
         currentMonthIndex = 0
         currentYear++
      }
      updateCalendar()
   }

   // Navegar para o mês anterior
   function prevMonth() {
      if (currentMonthIndex > 0) {
         currentMonthIndex--
      } else {
         if (currentYear > 0) {
            currentMonthIndex = months.length - 1
            currentYear--
         }
      }
      updateCalendar()
   }

   function generateDayClassName({
      isWeekend,
      isNextMonth,
      isPrevMonth,
   }: {
      isWeekend: boolean
      isNextMonth: boolean
      isPrevMonth: boolean
   }) {
      return `day-flex ${isWeekend ? "weekend" : ""} ${isNextMonth ? "next-month" : ""} ${isPrevMonth ? "prev-month" : ""}`
   }
</script>

<!-- <div style="--size: {Math.max(weekDays.length - 1, 1)};"> Example how to create dynamic css vars in Svelte -->
<div style="--window-size: {$windowWidth};">
   <button on:click={prevMonth}>&lt; Mês Anterior </button>
   <button on:click={nextMonth}>Próximo Mês &gt;</button>

   {#each [calendar[currentMonthIndex]] as { month, year, weeks }}
      <h2>Month of the {month} - Year {year}</h2>
      <div class="week-header">
         {#each weekHeader as header}
            <span class="day-header">{header}</span>
         {/each}
      </div>

      {#key currentMonthIndex}
         <div class="fade month-container">
            <div class="month-flex">
               {#each weeks as week}
                  <div class="week-flex">
                     {#each week as { day, dayOfWeek, isWeekend, isNextMonth, isPrevMonth }}
                        <div class={generateDayClassName({ isWeekend, isNextMonth, isPrevMonth })}>
                           {day}
                        </div>
                     {/each}
                  </div>
               {/each}
            </div>
         </div>
      {/key}
   {/each}
</div>

<style>
   .weekend {
      color: red;
   }

   .calendar {
      display: flex;
      flex-direction: column;
   }

   .month-flex {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-bottom: 10px;
      font-weight: 500;
   }

   .week-flex {
      display: flex;
      gap: 2px;
      justify-content: center;
   }

   .week-header {
      display: flex;
      gap: 2px;
      justify-content: center;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: white;
      background-color: rgb(73, 73, 73);
      margin-bottom: 5px;
   }

   .day-flex {
      min-width: 12%;
      aspect-ratio: 1/1;
      border: 1px solid rgb(0, 0, 0);
      text-align: end;
      padding: 5px;
      background-color: rgb(207, 207, 207);
   }

   .day-flex:nth-child(1) {
      color: red;
   }

   .day-flex:nth-last-child(1) {
      color: red;
   }

   .day-flex:hover {
      background-color: rgb(226, 226, 226);
      transform: scale(1.05);
   }

   .day-header {
      min-width: 12%;
      border: 1px solid white;
   }

   .prev-month,
   .next-month {
      opacity: 0.2;
   }

   @keyframes fadeIn {
      0% {
         opacity: 0;
      }

      35% {
         opacity: 0.2;
      }

      100% {
         opacity: 1;
      }
   }

   .fade {
      opacity: 0;
      animation: fadeIn 0.8s forwards;
   }
</style>
