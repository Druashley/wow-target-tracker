import { createChat, chatCopy, person } from "./domelements.js"

import { iconArray } from "./iconobjects.js"



// create format for the text
// use a for loop or map to generate each value
// needs to account for empty values
// take the value and add it to the format
//  print to console for now. add a new way after it is completed.


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