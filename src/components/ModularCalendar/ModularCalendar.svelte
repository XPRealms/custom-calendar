<script lang="ts">
   import { generateCalendar, months, weekDays } from "./generateCalendar"

   let currentYear = 0
   let currentMonthIndex = 0
   const { days, weekHeader } = generateCalendar(weekDays, months, currentYear)
   let calendar = days
   console.log("DBG:", { calendar })

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
</script>

<div style="--size: {Math.max(weekDays.length - 1, 1)};">
   <button on:click={prevMonth}>&lt; Mês Anterior </button>
   <button on:click={nextMonth}>Próximo Mês &gt;</button>

   {#each [calendar[currentMonthIndex]] as { month, year, weeks }}
      <h2>Month of the {month} - Year {year}</h2>
      <div class="week-header">
         {#each weekHeader as header}
            <span class="day-header">{header}</span>
         {/each}
      </div>

      <div class="month-flex">
         {#each weeks as week}
            <div class="week-flex">
               {#each week as { day, dayOfWeek, isWeekend }}
                  <div class={`day-flex ${isWeekend ? "weekend" : ""}`}>
                     {dayOfWeek}: {day}
                  </div>
               {/each}
            </div>
         {/each}
      </div>
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
   }

   .week-header {
      display: flex;
      gap: 2px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: white;
      background-color: rgb(73, 73, 73);
      margin-bottom: 5px;
   }

   .day-flex {
      flex: 3;
      aspect-ratio: 1/1;
      border: 1px solid rgb(0, 0, 0);
      text-align: end;
      padding: 5px;
      background-color: rgb(207, 207, 207);
   }

   .day-flex:hover {
      background-color: rgb(226, 226, 226);
      transform: scale(1.05);
   }

   .day-header {
      flex: 3;
      border: 1px solid white;
   }

   .month {
      display: grid;
      grid-template-columns: repeat(var(--size), 1fr);
      gap: 10px;
   }
</style>
