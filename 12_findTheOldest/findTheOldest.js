const findTheOldest = function(obj) {
    return obj.reduce((obj, item) => {
        if (!('yearOfDeath' in item)) {
            item.yearOfDeath = 2022
        }
        let currentAge = item.yearOfDeath - item.yearOfBirth; 
        let currentPerson = item.name; 
        if (currentAge > obj.age) {
            obj.name = currentPerson; 
            obj.age = currentAge; 
            console.log(currentAge, currentPerson)
        }
        return obj
    }, {
        name: "",
        age: 0
    })
};

// Do not edit below this line
module.exports = findTheOldest;
