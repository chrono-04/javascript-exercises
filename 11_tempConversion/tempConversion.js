const convertToCelsius = function (temp) {
  let result = ((temp - 32) * 5) / 9;
  if (result === 0) {
    return Math.round(result);
  } else {
    return Number(result.toFixed(1));
  }
};

const convertToFahrenheit = function (temp) {
  let result = (temp * 9) / 5 + 32;
  if (result === 0) {
    return Math.round(result);
  } else {
    return Number(result.toFixed(1));
  }
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-100));

console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(73.2));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
