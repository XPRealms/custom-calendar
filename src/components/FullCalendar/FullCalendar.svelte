<script lang="ts">
   import { onMount } from "svelte"
   import { Calendar } from "@fullcalendar/core"
   import dayGridPlugin from "@fullcalendar/daygrid"

   let calendar: Calendar

   onMount(() => {
      calendar = new Calendar(document.getElementById("calendar")!, {
         plugins: [dayGridPlugin],
         initialView: "dayGridMonth",
      })

      calendar.render()
   })
</script>

<div id="calendar"></div>
