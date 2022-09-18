const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(array) {
  if (array.length == 0) {
    return 0 
  } else if (array.length == 1) {
    return array[0]
  } 
	return array.reduce((total, item) => add(total, item), 0)
};

const multiply = function(array) {
  return array.reduce((total, item) => total * item, 1)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(number) {
  if (number == 0) {
    return 1
  }
	for (let i = number - 1; i > 0; i--) {
    number *= i
  }
  return number 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
