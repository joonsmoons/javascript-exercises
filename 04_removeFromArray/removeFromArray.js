const removeFromArray = function(array, ...values) {
    for (let value of values) {
        const index = array.indexOf(value)
        if (index > -1) {
            array.splice(index, 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
