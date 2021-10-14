// <reference path="moduleExample.ts" />
import { useful, multiplyByThree } from "./moduleExample";

let num1 = new useful();
let num2 = new multiplyByThree();
console.log(num1.timesTwo(10));
console.log(num2.threeTimes(10));