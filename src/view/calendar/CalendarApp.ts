import { SvelteApplication, type SvelteApp } from "#runtime/svelte/application"
import { CONSTANTS } from "src/constants"

import CalendarAppShell from "./CalendarAppShell.svelte"

// Make sure to check out the `BasicApp` namespace below on defining custom options and interface for the `#external`
// context.

class CalendarApp extends SvelteApplication<CalendarApp.Options> {
   constructor(options?: Partial<CalendarApp.Options>) {
      super(options)
   }

   static get defaultOptions(): CalendarApp.Options {
      return foundry.utils.mergeObject<SvelteApp.Options, Partial<CalendarApp.Options>>(super.defaultOptions, {
         extra: true, // Typed extra option from `BasicApp.Options` below.
         id: CONSTANTS.ID,
         resizable: true,
         minimizable: true,
         width: "25%", // Just showing off you can use browser window percentages too!
         top: "10%",

         title: "CustomCalendar.title",

         svelte: {
            class: CalendarAppShell,
            target: document.body,
         },
      })
   }
}

declare namespace CalendarApp {
   /** Extends the SvelteApp `#external` types specifying a concrete application */
   export type External = SvelteApp.Context.External<CalendarApp>

   /** Extended options that you can define. */
   export interface Options extends SvelteApp.Options {
      /** An example of defining additional options */
      extra?: boolean
   }
}

export { CalendarApp }
