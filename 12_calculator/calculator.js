const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr = []) {
  return arr.reduce((acc, currentVal) => {
    return acc + currentVal;
  }, 0);
};

const multiply = function (arr = []) {
  return arr.reduce((acc, currVal) => {
    return acc * currVal;
  }, 1);
};

const power = function (num, pow) {
  return num ** pow;
};

const factorial = function (n) {
  if (n < 0) return NaN;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  {
    return result;
  }
};

console.log(add(0, 0));
console.log(add(2, 2));
console.log(add(2, 6));
console.log(subtract(10, 4));
console.log(subtract(-10, -4));
console.log(subtract(-8, 7));
console.log(sum([]));
console.log(sum([7]));
console.log(sum([7, 11]));
console.log(sum([1, 3, 5, 7, 9]));
console.log(multiply([2, 4]));
console.log(multiply([2, 4, 6, 8, 10, 12, 14]));
console.log(power(4, 3));
console.log(power(3, 10));
console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
