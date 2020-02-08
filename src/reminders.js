import { bossList } from "./domelements.js"
import { mcBossList } from "./mcbosslist.js"

const setReminders = () => {
    let reminder = bossList.value;
    
    if (reminder == 'lucifron') {mcBossList[0].setReminder()}
    if (reminder == "magmadar") {mcBossList[1].setReminder()};
    if (reminder == 'gehennas') {mcBossList[2].setReminder()};
    if (reminder == 'garr') {mcBossList[3].setReminder()};
    if (reminder == 'baronGeddon') {mcBossList[4].setReminder()};
    if (reminder == 'shazzrah') {mcBossList[5].setReminder()};
    if (reminder == 'sulfuronHarbinger') {mcBossList[6].setReminder()};
    if (reminder == 'golemagg') {mcBossList[7].setReminder()};
    if (reminder == 'majordomo') {mcBossList[8].setReminder()};
    if (reminder == 'ragnaros') {mcBossList[9].setReminder()};

    if (reminder == 'razorgore') {console.log('razorgore')};
    if (reminder == 'vaelastrasz') {console.log('vaelastrasz')};
    if (reminder == 'broodlordLashlayer') {console.log('broodlordLashlayer')};
    if (reminder == 'firemaw') {console.log('firemaw')};
    if (reminder == 'ebonroc') {console.log('ebonroc')};
    if (reminder == 'flamegor') {console.log('flamegor')};
    if (reminder == 'chromaggus') {console.log('chromaggus')};
    if (reminder == 'nefarian') {console.log('nefarian')};
    
}








const loadReminders = () => { bossList.addEventListener("click", setReminders) }



export { loadReminders }
