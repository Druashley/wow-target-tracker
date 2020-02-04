import { createChat, chatCopy, person } from "./domelements.js"

import { iconArray } from "./iconobjects.js"







function getChatValues(arr) {
    chatCopy.value = ''

    for (let i = 0; i < iconArray.length; i++) {
        chatCopy.value += iconArray[i].textcode
    } 
    return chatCopy
}



const setChatButton = () => {
    person.forEach (line => line.addEventListener("keyup", getChatValues))
    person.forEach (line => line.addEventListener("blur", getChatValues))
}


export { setChatButton }