// js will go here
import { setBosses, loadBosses } from "./selection.js"
import { loadReminders } from "./reminders.js";

function startUp () {
    loadBosses();
    loadReminders();
}

startUp();