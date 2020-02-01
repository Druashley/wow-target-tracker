import { clearAll, person } from "./domelements.js"


function remove () {
    person.forEach(x => {x.value = ''})
}


const removeAllButton = () =>   {clearAll.addEventListener("click", remove)}


export { removeAllButton }