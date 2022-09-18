const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS"
    } else if (number <= 2) {
        return 1 
    } 
    return fibonacci(number - 1) + fibonacci(number - 2)
};

// Do not edit below this line
module.exports = fibonacci;

// 4 => 3
// 1, 1, 2, 3

// fibonacci(3)                                    + fibonacci(2) 
// fibonacci(2)                 + fibonacci(1)     + fibonacci(1) + fibonacci(0)
// fibonacci(1) + fibonacci(0)


// 3 => 2

// fibonacci(2)                 + fibonacci(1)
// fibonacci(1) + fibonacci(0)


// 2 ? 

// 1, 1 


