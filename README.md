### Custom Calendar Module for Foundry VTT

#### Description  
The **Custom Calendar Module** is a fully customizable calendar solution designed specifically for Foundry VTT. This module enhances your tabletop RPG experience by allowing the Game Master (GM) to create, configure, and manage calendars tailored to their campaign's needs. Whether you're using a Gregorian calendar, a Chinese calendar, or a completely custom calendar, this module offers unparalleled flexibility. With features such as event management, personal and world calendars, multiple timelines, and game date display options, this module brings immersive timekeeping to your virtual tabletop.

This project was set up using the **Foundry VTT module template repository** with the TyphonJS Runtime Library, Svelte, and TypeScript. Special thanks to **TyphonJS Runtime** for providing the template and runtime framework.

---

#### Key Features:
1. **Custom Calendar Creation**
   - Configure weeks, months, and years.
   - Define custom names for days, months, and years.
   - Support for decrementing calendars (e.g., BC timelines).

2. **World and Personal Calendars**
   - World Calendar: Visible to all players with optional editing permissions.
   - Personal Calendar: Visible and editable only by individual players.

3. **Event Management**
   - Add and manage events with titles and descriptions.
   - Display notifications for events when dates change.

4. **Time Management**
   - Advance or set custom world dates.
   - Notifications for events triggered by time changes.

5. **Multiple Calendars**
   - Manage independent timelines for different calendars.
   - Switch between calendars during gameplay.

6. **Game Date Display**
   - Show the current date on-screen.
   - Customize display opacity and font color.

---

#### Tasks and Milestones  

##### Custom Calendar Creation
- [ ] Implement week, month, and year configuration.
- [x] Add support for custom names of days, months, and years.
- [ ] Implement decrementing calendar functionality.
- [ ] Prevent time advancement past year 0 for the decrementing calendar functionality.

##### World and Personal Calendars
- [x] Add a toggleable calendar icon near the Hotbar.
- [ ] Implement World Calendar with GM-editing controls.
- [ ] Implement Personal Calendar for player-specific views.

##### Event Management
- [ ] Allow adding events with titles and descriptions.
- [ ] Display event notifications when dates change.

##### Time Management
- [ ] Enable advancing the current world date.
- [ ] Add functionality to set custom dates.
- [ ] Ensure time changes trigger notifications for corresponding events.

##### Multiple Calendars
- [ ] Support multiple calendars in the same world.
- [ ] Maintain independent timelines for each calendar.

##### Game Date Display
- [ ] Add an option to display the current date on the screen.
- [ ] Allow players to adjust opacity and font color.

##### Testing and Finalization
- [ ] Test the module for compatibility with Foundry VTT.
- [ ] Finalize documentation and examples.
