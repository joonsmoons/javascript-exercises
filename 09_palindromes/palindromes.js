const palindromes = function (string) {
    const original = string.toLowerCase().replace(/[^a-z]/g, "");
    const flipped = original.split("").reverse().join("");
    return original === flipped 
};

// Do not edit below this line
module.exports = palindromes;
