// js will go here
import { setBosses, loadBosses } from "./selection.js"
import { loadReminders } from "./reminders.js";
import { removeAllButton } from "./button.js"

function startUp () {
    loadBosses();
    loadReminders();
    removeAllButton();
}

startUp();