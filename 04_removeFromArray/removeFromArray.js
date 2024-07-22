const removeFromArray = function(inputArray, ...valuesToRemove) {
    newArray = inputArray.filter(element => !valuesToRemove.includes(element));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
