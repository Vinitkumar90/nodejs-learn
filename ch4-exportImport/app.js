// require("./xyz");  // one module into another (only code is executed no access to variable and function in other module) 

// const calculateSum = require("./sum")
// calculateSum(2,2);

// const obj = require("./sum");
// const {calculateSum,x} = require("./sum")

// calculateSum(2,2);
// console.log(x);

//-----

import {x,calculateSum} from "./sum.js";
// import calculateSum from "./sum.js";

calculateSum(2,2);
console.log(x);

//
const {sum,multiply} = require("./calculate/") // index will itself be taken care off!  //calculate module

const data = require("./data.json")