const sumAll = function(first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second) || first < 0 || second < 0) {
        return "ERROR"
    }
    let ranges = [first, second]
    ranges.sort()
    let ret = 0
    for (let i = ranges[0]; i <= ranges[1]; i++) {
        ret += i
    }
    return ret
};

// Do not edit below this line
module.exports = sumAll;
