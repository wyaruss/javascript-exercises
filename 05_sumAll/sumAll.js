const sumAll = function(firstNum, secondNum) {
    //Assign start and end based on which value is lower 
    if (firstNum > secondNum) {
        var start = secondNum;
        var end = firstNum;
    } else {
        var start = firstNum;
        var end = secondNum;
    }

    //Error out for negatives
    if (firstNum < 0 || secondNum < 0) {
        return("ERROR");
    }

    //Error out for NaNs
    if (typeof firstNum != "number" || typeof secondNum != "number") {
        return 'ERROR';
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
