import ExternalObject from './ExternalObject.es6';

new ExternalObject("ES6 preclass");

//let ES5Class = require("../es5/es5class.js");
//let ES5Class = require("!exports-loader?ES5Class!imports-loader?ExternalObject=>ExternalObject!../es5/es5class.js");

//require("exports-loader?ES5Class!../es5/es5class.js");
let ES5Class = require("es5Class");


export default class ES6Class extends ES5Class{
    constructor(){

        new ExternalObject("ES6");
        //global.ExternalObject = ExternalObject;
        super();
        console.log(">> es6 post constructor");
    }
}