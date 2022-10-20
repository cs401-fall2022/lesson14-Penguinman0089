
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
        var c = document.getElementById("demo").style.fontSize;
        var d = document.getElementById("demo").style.color;
        if (d === 'lime') {
            document.getElementById("demo").style.color = "white";
            document.getElementById("demo").style.fontSize = "300px";
        }
        else {
            document.getElementById("demo").style.color = "lime";
            document.getElementById("demo").style.fontSize = "15px";
        }
    }
}
export { hello, turnRed };
//# sourceMappingURL=app.js.map