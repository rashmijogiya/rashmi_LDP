"use strict";
exports.__esModule = true;
// <reference path="moduleExample.ts" />
var moduleExample_1 = require("./moduleExample");
var num1 = new moduleExample_1.useful();
var num2 = new moduleExample_1.multiplyByThree();
console.log(num1.timesTwo(10));
console.log(num2.threeTimes(10));
