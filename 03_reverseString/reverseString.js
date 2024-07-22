const reverseString = function(word) {
    let stringArray = Array.from(word); 
    let reversedArray = stringArray.reverse(); 
    let reversedString = stringArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
