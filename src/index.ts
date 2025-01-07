import { BasicApp } from "./view/basic/BasicApp"
import "../styles/custom-calendar-ui.css"

const calendarApp = new BasicApp()
// Creates and renders BasicApp on the Foundry `ready` hook.
Hooks.on("ready", () => {
   // calendarApp.render(true, { focus: true })
})

Hooks.on('renderHotbar', (_, hotbarElement :JQuery<HTMLElement>)=> {
   hotbarElement.append(
      /*html*/
      `
        <button
          type='button'
          class='cc-custom-calendar-ui-button'
          title='Custom Calendar'
        >
            <i class="fa-regular fa-calendar-days fa-2x"></i>
        </button>
      `
    )

    hotbarElement.on("click", '.cc-custom-calendar-ui-button', (_) => {
      calendarApp.render(true, { focus: true })
    })

})