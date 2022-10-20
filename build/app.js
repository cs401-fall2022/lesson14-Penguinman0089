/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World";
}
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
export { hello, turnRed };
//# sourceMappingURL=app.js.map