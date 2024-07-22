const convertToCelsius = function(tempInF) {
  let tempInC = ((tempInF - 32) * (5.0 / 9.0));
  return parseFloat(tempInC.toFixed(1));
};

const convertToFahrenheit = function(tempInC) {
  let tempInF = (tempInC * (9.0 / 5.0) + 32);
  return parseFloat(tempInF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
