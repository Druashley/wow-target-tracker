import { clearAll, person, chatCopy, createChat, toolTip } from "./domelements.js"


function remove() {
    person.forEach(x => { x.value = '' });
    chatCopy.value = '';
}

function copyChat() {
    chatCopy.select();
    chatCopy.setSelectionRange(0, 99999);
    document.execCommand("copy");
    toolTip.innerHTML = "Copied"
    toolTip.classList.remove("tooltip-transparent"); 
    setTimeout(()=>toolTip.classList.add("tooltip-transparent"),1000);
}


const removeAllButton = () => { clearAll.addEventListener("click", remove) }

const copyButton = () => { createChat.addEventListener("click", copyChat)}

export { removeAllButton, copyButton }