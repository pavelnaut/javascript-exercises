const sumAll = function(Num1, Num2) {
    // integer check
    if ((typeof(Num1) != 'number') || (typeof(Num2) != 'number')) {
        return "ERROR";
    }

    // negative numbers check
    if ((Num1 < 0) || (Num2 < 0)) {
        return "ERROR";
    }

    // sort bigger argument
    let fromNumber = Num1;
    let toNumber = Num2;
    if (Num1 > Num2) {
        fromNumber = Num2;
        toNumber = Num1;
    }

    // sum numbers
    let sum = fromNumber;
    for (let i = 1; (fromNumber + i) <= toNumber; i++) {
        sum += (fromNumber + i);
      }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
