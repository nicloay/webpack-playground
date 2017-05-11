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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


class ExternalObject {
    constructor(string) {
        console.log(`ExternalObject created >>>${string}<<<`);
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = ExternalObject;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__es6class_es6__ = __webpack_require__(2);


console.log("main");

new __WEBPACK_IMPORTED_MODULE_0__es6class_es6__["a" /* default */]();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ExternalObject_es6__ = __webpack_require__(0);


new __WEBPACK_IMPORTED_MODULE_0__ExternalObject_es6__["default"]("ES6 preclass");

//let ES5Class = require("../es5/es5class.js");
//let ES5Class = require("!exports-loader?ES5Class!imports-loader?ExternalObject=>ExternalObject!../es5/es5class.js");

//require("exports-loader?ES5Class!../es5/es5class.js");
let ES5Class = __webpack_require__(3);

class ES6Class extends ES5Class {
    constructor() {

        new __WEBPACK_IMPORTED_MODULE_0__ExternalObject_es6__["default"]("ES6");
        //global.ExternalObject = ExternalObject;
        super();
        console.log(">> es6 post constructor");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ES6Class;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var tmp = __webpack_require__(0);

/*** IMPORTS FROM imports-loader ***/
var ExternalObject = tmp.default;


function InternalObject(){
    console.log("internalObject created");
}

InternalObject.prototype = Object.create({});
InternalObject.prototype.constructor = InternalObject;


function ES5Class() {
    console.log(">> ES5Class constructor")
    new InternalObject();
    console.log("---->>> ");
    // console.log(ExternalObject);
    new ExternalObject("ES5!!");
}

ES5Class.prototype = Object.create({});
ES5Class.prototype.constructor = ES5Class;



/*** EXPORTS FROM exports-loader ***/
module.exports = ES5Class;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map