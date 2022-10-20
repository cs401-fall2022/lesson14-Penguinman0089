"use strict";
exports.__esModule = true;
exports.turnRed = exports.hello = void 0;
/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World!";
}
exports.hello = hello;
;
function turnRed() {
    if (document != null) {
        var c = document.getElementById("demo").style.fontSize;
        var d = document.getElementById("demo").style.color;
        if (d === 'white') {
            document.getElementById("demo").style.color = "lime";
            document.getElementById("demo").style.fontSize = "300px";
        }
        else {
            document.getElementById("demo").style.color = "white";
            document.getElementById("demo").style.fontSize = "20px";
        }
    }
}
exports.turnRed = turnRed;
