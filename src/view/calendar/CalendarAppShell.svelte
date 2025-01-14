<script lang="ts">
   import { getContext } from "svelte"
   import { ApplicationShell } from "#runtime/svelte/component/application"
   import { type CalendarApp } from "./CalendarApp"
   import FullCalendar from "src/components/FullCalendar/FullCalendar.svelte"
   import ModularCalendar from "src/components/ModularCalendar/ModularCalendar.svelte"
   import { USER_ROLES } from "src/types"
   import type { CalendarData } from "src/types"
   import { generateCalendar, sampleMonths, sampleWeekDays } from "../../helpers/generateCalendar"
   import { CONSTANTS } from "src/constants"

   // Application shell contract.
   export let elementRoot: HTMLElement

   // You can use `SvelteApp.Context.External` from `#runtime/svelte/application` to get the basic
   // `SvelteApplication` `#external` context. Here we use an extended type defining `application`
   // as `BasicApp`.
   const { application } = getContext<CalendarApp.External>("#external")
   const game = globalThis.game // Access global game as globalThis.game
   console.log("DBG: Svelte", { test: game.settings })
   const userGM = game.users.filter((user) => user.role === USER_ROLES.GAMEMASTER)?.[0]
   const userId = game.userId
   const isGM = userGM._id === game.userId

   async function handleCreateNewCustomCalendar() {
      if (!isGM) {
         return
      }

      const calendarData: CalendarData = {
         month: sampleMonths,
         weekDays: sampleWeekDays,
         name: "My Custom Calendar",
         isActive: true,
      }

      game.users.get(userId)?.setFlag(CONSTANTS.ID, CONSTANTS.FLAG, calendarData)
   }

   // Shows that you can get the extra options defined in `BasicApp`.
   if (application.options.extra) {
      /* no-op */
   }
</script>

<!-- ApplicationShell provides the popOut / application shell frame, header bar, content areas -->
<!-- ApplicationShell exports `elementRoot` which is the outer application shell element -->
<ApplicationShell bind:elementRoot>
   <main>
      {#if isGM}
         <button on:click={handleCreateNewCustomCalendar}>Create New Calendar</button>
      {/if}
      <h1>Custom Calendar</h1>
      <ModularCalendar />

      <h1>Gregorian Calenda</h1>
      <FullCalendar />
   </main>
</ApplicationShell>

<style lang="scss">
   main {
      text-align: center;
      display: flex;
      flex-direction: column;
   }
</style>

<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true} />
