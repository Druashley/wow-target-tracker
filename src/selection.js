import { raid, bossList, bossListContainer } from "./domelements.js"

const setBosses = () => {
    let x = raid.value;
    bossList.style.display = 'block'
    if (x == 'none') {bossList.innerHTML = ''; bossList.style.display = 'none'}
    if (x == "mc") {bossList.innerHTML = '<option>Pick Boss</option><option value="lucifron">Lucifron</option><option value="magmadar">Magmadar</option><option value="gehennas">Gehennas</option><option value="garr">Garr</option><option value="baronGeddon">Baron Geddon</option><option value="shazzrah">Shazzrah</option><option value="sulfuronHarbinger">Sulfuron Harbinger</option><option value="golemagg">Golemagg</option><option value="majordomo">Majordomo</option><option value="ragnaros">Ragnaros</option>';}
    if (x == 'bwl') {bossList.innerHTML = '<option value="boss-one">Boss #1</option><option value="boss-two">Boss #2</option><option value="boss-three">Boss #3</option><option value="boss-four">Boss #4</option><option value="boss-five">Boss #5</option><option value="boss-six">Boss #6</option>';}

}



const loadBosses = () => {raid.addEventListener("click", setBosses)}




export { setBosses, loadBosses }

