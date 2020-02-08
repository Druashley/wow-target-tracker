import {bossInfo} from "./domelements.js"

const bossFactory = ({tankCount, ccNeeded, dispelNeeded, decurseNeeded, description }) => ({
    tankCount,
    ccNeeded,
    dispelNeeded,
    decurseNeeded,
    description,
    setReminder: () => {
         bossInfo.innerHTML = `<ul>Tanks Needed: ${tankCount}</ul><ul>CC Needed: ${ccNeeded} </ul><ul>Dispel Needed: ${dispelNeeded} </ul><ul>Decurse Needed: ${decurseNeeded}</ul><ul>Description: ${description}</ul>`   
    }
})

//({tankCount: '1', ccNeeded: 'N/A', dispelNeeded: false, decurseNeeded: false, description: ''})

export { bossFactory }