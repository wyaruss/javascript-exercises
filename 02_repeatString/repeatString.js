const repeatString = function(word, timesToPrint) {
    if (timesToPrint < 0) {
        return "ERROR";
    }
    returnString = "";
    for (let i = 0; i < timesToPrint; i++) {
        returnString += word;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
