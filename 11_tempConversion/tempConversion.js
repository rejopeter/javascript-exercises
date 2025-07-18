const convertToCelsius = function(f) {
  const c = ((f - 32) * (5/9));
  return Math.round(c);
};

const convertToFahrenheit = function(c) {
  const f = ((c * (9/5)) + 32);
  return Math.round(f);
};

console.log(convertToCelsius(32))
console.log(convertToFahrenheit(0))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
