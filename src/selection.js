import { raid, bossList, bossListContainer } from "./domelements.js"

const setBosses = () => {
    let x = raid.value;
    bossList.style.display = 'block'
    if (x == 'none') {bossList.innerHTML = ''; bossList.style.display = 'none'}
    if (x == "mc") {bossList.innerHTML = '<option>Pick Boss</option><option value="lucifron">Lucifron</option><option value="magmadar">Magmadar</option><option value="gehennas">Gehennas</option><option value="garr">Garr</option><option value="baronGeddon">Baron Geddon</option><option value="shazzrah">Shazzrah</option><option value="sulfuronHarbinger">Sulfuron Harbinger</option><option value="golemagg">Golemagg</option><option value="majordomo">Majordomo</option><option value="ragnaros">Ragnaros</option>';}
    if (x == 'bwl') {bossList.innerHTML = '<option>Pick Boss</option><option value="razorgore">Razorgore</option><option value="vaelastrasz">Vaelastrasz</option><option value="broodlordLashlayer">Broodlord Lashlayer</option><option value="firemaw">Firemaw</option><option value="ebonroc">Ebonroc</option><option value="flamegor">Flamegor</option><option value="chromaggus">Chromaggus</option><option value="nefarian">Nefarian</option>';}

}



const loadBosses = () => {raid.addEventListener("click", setBosses)}




export { setBosses, loadBosses }

