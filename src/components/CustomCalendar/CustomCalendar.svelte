<script lang="ts">
   import { generateCalendar } from "./helpers"

   const { days, today } = generateCalendar()

   function isWeekend(day: number) {
      return day === 0 || day === 6
   }
</script>

<style lang="scss">
   .calendar {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
      text-align: center;

      .weekend {
         border: 2px solid red;
      }
   }
</style>

<h2>{today.format("MMMM YYYY")}</h2>
<div class="calendar">
   {#each days as day}
      <div class={isWeekend(day.day()) ? "weekend" : ""}>{day.format("D")}</div>
   {/each}
</div>
