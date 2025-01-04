<script>
   import Calendar from "@event-calendar/core"
   import DayGrid from "@event-calendar/day-grid"

   let plugins = [DayGrid]
   let options = {
      view: "month",
      events: [
         // your list of events
      ],
   }
</script>

<main>
   <Calendar {plugins} {options} />
</main>
