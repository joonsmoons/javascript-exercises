const reverseString = function(string) {
    let splitString = string.split(""); 
    let ret = "";
    for (let i = splitString.length - 1; i > -1; i--) {
        ret += splitString[i]
    }
    return ret
};

// Do not edit below this line
module.exports = reverseString;

console.log(reverseString('hello world'))