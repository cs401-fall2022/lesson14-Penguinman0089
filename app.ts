/**
 * This returns the string hello
 * @returns the String hello
 */
function hello (): String {
    return "Hello World";
};

/**
 * turns demo red
 */
 function turnRed() {
    if(document != null){
        let c = document.getElementById("demo").style.color;
        if(c === 'lime'){
            document.getElementById("demo").style.color = "white";
        }else{
            document.getElementById("demo").style.color = "lime";
        }
    }    
}

export {hello, turnRed}
