<script lang="ts">
   import { generateCalendar, months, weekDays } from "./generateCalendar"

   let currentYear = 0
   let currentMonthIndex = 0
   let calendar = generateCalendar(weekDays, months, currentYear)

   // Atualizar o calendário
   function updateCalendar() {
      calendar = generateCalendar(weekDays, months, currentYear)
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
   <button on:click={prevMonth}>Mês Anterior</button>
   <button on:click={nextMonth}>Próximo Mês</button>

   {#each [calendar[currentMonthIndex]] as { month, year, weeks }}
      <h2>Month of the {month} - Year {year}</h2>
      <div class="month">
         {#each weeks as week}
            <div class="week">
               {#each week as { day, dayOfWeek, isWeekend }}
                  <div class={`day ${isWeekend ? "weekend" : ""}`}>
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

   .month {
      display: grid;
      grid-template-columns: repeat(var(--size), 1fr);
      gap: 10px;
   }
</style>
