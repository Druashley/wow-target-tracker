// js will go here
import { setBosses, loadBosses } from "./selection.js"
import { loadReminders } from "./reminders.js";
import { removeAllButton, copyButton} from "./button.js"
import { setChatButton } from "./createchat.js"




function startUp () {
    loadBosses();
    loadReminders();
    removeAllButton();
    copyButton();
    setChatButton();
}

startUp();
