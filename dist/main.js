/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export title */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return raid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bossList; });
/* unused harmony export bwlBossList */
/* unused harmony export bossListContainer */
/* unused harmony export targetListContainer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bossInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return person; });
const title = document.querySelector('.title');
const raid = document.querySelector('.raid');
const bossList = document.querySelector('.boss-list');
const bossListContainer = document.querySelector('.boss-list-container')
const targetListContainer = document.querySelector('.target-list-container')
const bossInfo = document.querySelector('.boss-info');
const clearAll = document.querySelector('.clear-all');
const person = document.querySelectorAll(".person");




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reminders_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_js__ = __webpack_require__(4);
// js will go here




function startUp () {
    Object(__WEBPACK_IMPORTED_MODULE_0__selection_js__["a" /* loadBosses */])();
    Object(__WEBPACK_IMPORTED_MODULE_1__reminders_js__["a" /* loadReminders */])();
    Object(__WEBPACK_IMPORTED_MODULE_2__button_js__["a" /* removeAllButton */])();
}

startUp();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setBosses */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadBosses; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domelements_js__ = __webpack_require__(0);


const setBosses = () => {
    let x = __WEBPACK_IMPORTED_MODULE_0__domelements_js__["e" /* raid */].value;
    __WEBPACK_IMPORTED_MODULE_0__domelements_js__["b" /* bossList */].style.display = 'block'
    if (x == 'none') {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["b" /* bossList */].innerHTML = ''; __WEBPACK_IMPORTED_MODULE_0__domelements_js__["b" /* bossList */].style.display = 'none'}
    if (x == "mc") {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["b" /* bossList */].innerHTML = '<option>Pick Boss</option><option value="lucifron">Lucifron</option><option value="magmadar">Magmadar</option><option value="gehennas">Gehennas</option><option value="garr">Garr</option><option value="baronGeddon">Baron Geddon</option><option value="shazzrah">Shazzrah</option><option value="sulfuronHarbinger">Sulfuron Harbinger</option><option value="golemagg">Golemagg</option><option value="majordomo">Majordomo</option><option value="ragnaros">Ragnaros</option>';}
    if (x == 'bwl') {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["b" /* bossList */].innerHTML = '<option value="boss-one">Boss #1</option><option value="boss-two">Boss #2</option><option value="boss-three">Boss #3</option><option value="boss-four">Boss #4</option><option value="boss-five">Boss #5</option><option value="boss-six">Boss #6</option>';}

}



const loadBosses = () => {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["e" /* raid */].addEventListener("click", setBosses)}








/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadReminders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domelements_js__ = __webpack_require__(0);


const setReminders = () => {
    let reminder = __WEBPACK_IMPORTED_MODULE_0__domelements_js__["b" /* bossList */].value;
    
    if (reminder == 'lucifron') {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["a" /* bossInfo */].innerHTML ='<ul>Tanks Needed: 2/3 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: Both</ul><ul>Description: Kill adds then boss. Dispel low life targets first.</ul>'}
    if (reminder == "magmadar") {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["a" /* bossInfo */].innerHTML ='<ul>Tanks Needed: 1 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: N/A</ul><ul>Description: Tank and Spank. Hunters must use Tranquilizing Shot. Dont stand in fire. Drop Tremor Totems.</ul>'}
    if (reminder == 'gehennas') {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["a" /* bossInfo */].innerHTML ='<ul>Tanks Needed: 2/3 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: Decurse</ul><ul>Description: Get out of fire. Decurse tanks first. Kill adds then boss.</ul>'}
    if (reminder == 'garr') {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["a" /* bossInfo */].innerHTML = '<ul>Tanks Needed: 4/5 </ul><ul>CC Needed: Warlocks </ul><ul>Dispel/Decurse Needed: Waste of mana to dispel here.</ul><ul>Description: CC as many targets with warlocks and tank the rest. Tank & Kill any adds that are not CCd by warlocks then kill boss.</ul>'}
    if (reminder == 'baronGeddon') {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["a" /* bossInfo */].innerHTML = '<ul>Tanks Needed: 1 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: Dispel mana users only.</ul><ul>Description: Living Bomb - Person with this debuff needs to move to assigned area. Ignite mana must be dispeled on mana users ASAP, this can be line of sighted around the corner. Melee need to get out of firewave.</ul>'}
    if (reminder == 'shazzrah') {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["a" /* bossInfo */].innerHTML = '<ul>Tanks Needed: 1+ </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: Decurse & Purge</ul><ul>Description: All members spread out in an arc. Extra tanks will pick up Shazzrah when he teleports and return him to maintank. Decurse tank asap and other people when possible. Purge Shazzrah when needed.</ul>'}
    if (reminder == 'sulfuronHarbinger') {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["a" /* bossInfo */].innerHTML = '<ul>Tanks Needed: 4/5 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: Dispel</ul><ul>Description: Group mobs together and AOE down. Assign kick rotation to each enemy healer. Set one healer to dispels and the rest should dispel when possible. </ul>'}
    if (reminder == 'golemagg') {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["a" /* bossInfo */].innerHTML = '<ul>Tanks Needed: 3 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: N/A</ul><ul>Description: DPS boss not adds. Off tanks should take targets to the side at a far distance. If the adds horns are glowing, the offtanks are too close to the boss. </ul>'}
    if (reminder == 'majordomo') {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["a" /* bossInfo */].innerHTML = '<ul>Tanks Needed: 4/5 </ul><ul>CC Needed: Mage </ul><ul>Dispel/Decurse Needed: N/A </ul><ul>Description: Assign someone to lead guild on which target to focus. Watch damage reflections. Do not break sheeps with AOE. </ul>'}
    if (reminder == 'ragnaros') {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["a" /* bossInfo */].innerHTML = '<ul>Tanks Needed: 1/2 </ul><ul>CC Needed: N/A </ul><ul>Dispel/Decurse Needed: N/A </ul><ul>Description: Assign a melee to call in or out. Make sure there are at least 3 healers near tanks. Ranged dps can go hard right away. If phase 2 comes - Group up at pride rock. Drop hunter traps. Warlock CC. AOE down the adds. </ul>'}

}





const loadReminders = () => { __WEBPACK_IMPORTED_MODULE_0__domelements_js__["b" /* bossList */].addEventListener("click", setReminders) }






/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removeAllButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domelements_js__ = __webpack_require__(0);



function remove () {
    __WEBPACK_IMPORTED_MODULE_0__domelements_js__["d" /* person */].forEach(x => {x.value = ''})
}


const removeAllButton = () =>   {__WEBPACK_IMPORTED_MODULE_0__domelements_js__["c" /* clearAll */].addEventListener("click", remove)}




/***/ })
/******/ ]);