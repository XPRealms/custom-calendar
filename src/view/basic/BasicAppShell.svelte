<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true} />

<script lang="ts">
   import { getContext } from "svelte"
   import { ApplicationShell } from "#runtime/svelte/component/application"
   import { type BasicApp } from "./BasicApp"
   import FullCalendar from "src/components/FullCalendar/FullCalendar.svelte"
   import ModularCalendar from "src/components/ModularCalendar/ModularCalendar.svelte"

   // Application shell contract.
   export let elementRoot: HTMLElement

   // You can use `SvelteApp.Context.External` from `#runtime/svelte/application` to get the basic
   // `SvelteApplication` `#external` context. Here we use an extended type defining `application`
   // as `BasicApp`.
   const { application } = getContext<BasicApp.External>("#external")

   // Shows that you can get the extra options defined in `BasicApp`.
   if (application.options.extra) {
      /* no-op */
   }
</script>

<!-- ApplicationShell provides the popOut / application shell frame, header bar, content areas -->
<!-- ApplicationShell exports `elementRoot` which is the outer application shell element -->
<ApplicationShell bind:elementRoot>
   <main>
      <h1>Custom Calendar</h1>
      <ModularCalendar />
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
