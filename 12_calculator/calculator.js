const add = function(a, b) {
	if (typeof a === "undefined" || typeof b === "undefined") {
    return undefined;
  }
  if (typeof a !== "number" || typeof b !== "number") {
  return "Math error";
}
  return a + b;
  
};

const subtract = function(a, b) {
  if (typeof a === "undefined" || typeof b === "undefined") {
  return undefined;
}
  if (typeof a !== "number" || typeof b !== "number") {
  return "Math error";
}
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 0);
};

const power = function(a, exp) {
	if (typeof a === "undefined" || typeof b === "undefined") {
    return undefined;
  }
  return Math.pow(a, b);
};

const factorial = function(a) {
	if (typeof a === "undefined") {
    return undefined;
  }
  if (typeof a !== "number" || a < 0) {
    return "Math error";
  }
  if (a === 0 || a === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
