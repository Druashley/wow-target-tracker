import { createChat, skullInput, xInput, moonInput, circleInput, triangleInput, diamondInput, squareInput, starInput } from "./domelements.js"


const targetFactory = ({ icon, id, placeholder, wowcode, input }) => ({
    icon,
    id,
    placeholder,
    wowcode,
    input,
    get value() {
        if (input.value.length == 0) {
            return '';
        } else {
            return  input.value
        }
    },
    get textcode() {
        if (input.value.length == 0) {
            return '';
        } else {
            return this.wowcode + this.input.value + this.wowcode + ' '
        }
    },
});


const skullObject = targetFactory({ icon: "icons/skull.png", id: 'skull', placeholder: 'Skull', wowcode: '{rt8}', input: skullInput });
const xObject = targetFactory({ icon: "icons/x.png", id: 'x', placeholder: 'X', wowcode: '{rt7}', input: xInput });
const moonObject = targetFactory({ icon: "icons/moon.png", id: 'moon', placeholder: 'Moon', wowcode: '{rt5}', input: moonInput });
const circleObject = targetFactory({ icon: "icons/circle.png", id: 'circle', placeholder: 'Circle', wowcode: '{rt2}', input: circleInput });
const triangleObject = targetFactory({ icon: "icons/triangle.png", id: 'triangle', placeholder: 'Triangle', wowcode: '{rt4}', input: triangleInput });
const diamondObject = targetFactory({ icon: "icons/diamond.png", id: 'diamond', placeholder: 'Diamond', wowcode: '{rt3}', input: diamondInput });
const squareObject = targetFactory({ icon: "icons/square.png", id: 'square', placeholder: 'Square', wowcode: '{rt6}', input: squareInput });
const starObject = targetFactory({ icon: "icons/star.png", id: 'star', placeholder: 'Star', wowcode: '{rt1}', input: starInput });



function createIconArray() {
    return [skullObject, xObject, moonObject, circleObject, triangleObject, diamondObject, squareObject, starObject];
}

const iconArray = createIconArray();




export { iconArray, skullTest }

// Star {Star} / {rt1}
// Diamond {Diamond} / {rt3}
// Square {Square} / {rt6}
