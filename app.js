"use strict";
exports.__esModule = true;
exports.turnRed = exports.hello = void 0;
/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World";
}
exports.hello = hello;
;
/**
 * turns demo red
 */
function turnRed() {
    if (document != null) {
        var c = document.getElementById("demo").style.color;
        if (c === 'lime') {
            document.getElementById("demo").style.color = "white";
        }
        else {
            document.getElementById("demo").style.color = "lime";
        }
    }
}
exports.turnRed = turnRed;
