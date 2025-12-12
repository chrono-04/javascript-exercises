const sumAll = function (num1, num2) {
  let result = [];

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  if (
    typeof num1 !== "number" ||
    !Number.isInteger(num1) ||
    typeof num2 !== "number" ||
    !Number.isInteger(num2)
  ) {
    return "ERROR";
  }
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      result.push(i);
    }
  } else if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      result.push(i);
    }
  }
  console.log(result);
  let arrSum = result.reduce((acc, currentItem) => acc + currentItem, 0);
  return arrSum;
};

console.log(sumAll(2, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(2.5, 4));
console.log(sumAll(-10, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
