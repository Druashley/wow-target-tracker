import { bossInfo, bossList } from "./domelements.js"

const setReminders = () => {
    let reminder = bossList.value;
    
    if (reminder == 'lucifron') {bossInfo.innerHTML ='<ul>Tanks Needed: 2/3 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: Both</ul><ul>Description: Kill adds then boss. Dispel low life targets first.</ul>'}
    if (reminder == "magmadar") {bossInfo.innerHTML ='<ul>Tanks Needed: 1 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: N/A</ul><ul>Description: Tank and Spank. Hunters must use Tranquilizing Shot. Dont stand in fire. Drop Tremor Totems.</ul>'}
    if (reminder == 'gehennas') {bossInfo.innerHTML ='<ul>Tanks Needed: 2/3 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: Decurse</ul><ul>Description: Get out of fire. Decurse tanks first. Kill adds then boss.</ul>'}
    if (reminder == 'garr') {bossInfo.innerHTML = '<ul>Tanks Needed: 4/5 </ul><ul>CC Needed: Warlocks </ul><ul>Dispel/Decurse Needed: Waste of mana to dispel here.</ul><ul>Description: CC as many targets with warlocks and tank the rest. Tank & Kill any adds that are not CCd by warlocks then kill boss.</ul>'}
    if (reminder == 'baronGeddon') {bossInfo.innerHTML = '<ul>Tanks Needed: 1 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: Dispel mana users only.</ul><ul>Description: Living Bomb - Person with this debuff needs to move to assigned area. Ignite mana must be dispeled on mana users ASAP, this can be line of sighted around the corner. Melee need to get out of firewave.</ul>'}
    if (reminder == 'shazzrah') {bossInfo.innerHTML = '<ul>Tanks Needed: 1+ </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: Decurse & Purge</ul><ul>Description: All members spread out in an arc. Extra tanks will pick up Shazzrah when he teleports and return him to maintank. Decurse tank asap and other people when possible. Purge Shazzrah when needed.</ul>'}
    if (reminder == 'sulfuronHarbinger') {bossInfo.innerHTML = '<ul>Tanks Needed: 4/5 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: Dispel</ul><ul>Description: Group mobs together and AOE down. Assign kick rotation to each enemy healer. Set one healer to dispels and the rest should dispel when possible. </ul>'}
    if (reminder == 'golemagg') {bossInfo.innerHTML = '<ul>Tanks Needed: 3 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: N/A</ul><ul>Description: DPS boss not adds. Off tanks should take targets to the side at a far distance. If the adds horns are glowing, the offtanks are too close to the boss. </ul>'}
    if (reminder == 'majordomo') {bossInfo.innerHTML = '<ul>Tanks Needed: 4/5 </ul><ul>CC Needed: Mage </ul><ul>Dispel/Decurse Needed: N/A </ul><ul>Description: Assign someone to lead guild on which target to focus. Watch damage reflections. Do not break sheeps with AOE. </ul>'}
    if (reminder == 'ragnaros') {bossInfo.innerHTML = '<ul>Tanks Needed: 1/2 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: N/A </ul><ul>Description: Assign a melee to call in or out. Make sure there are at least 3 healers near tanks. Ranged dps can go hard right away. If phase 2 comes - Group up at pride rock. Drop hunter traps. Warlock CC. AOE down the adds. </ul>'}

}





const loadReminders = () => { bossList.addEventListener("click", setReminders) }



export { loadReminders }
