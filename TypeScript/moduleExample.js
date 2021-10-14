"use strict";
// module Common {
exports.__esModule = true;
exports.multiplyByThree = exports.useful = void 0;
var useful = /** @class */ (function () {
    function useful() {
    }
    useful.prototype.timesTwo = function (n) {
        return n * 2;
    };
    return useful;
}());
exports.useful = useful;
var multiplyByThree = /** @class */ (function () {
    function multiplyByThree() {
    }
    multiplyByThree.prototype.threeTimes = function (n1) {
        return n1 * 3;
    };
    return multiplyByThree;
}());
exports.multiplyByThree = multiplyByThree;
// }
