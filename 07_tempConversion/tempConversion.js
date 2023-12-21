const convertToCelsius = function (temp) {
  // (temp - 32) * 5/9
  const convertedTemp = (temp - 32) * (5 / 9);
  return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function (temp) {
  // (temp * (9/5) + 32)
  const convertedTemp = (temp * (9 / 5) + 32);
  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
