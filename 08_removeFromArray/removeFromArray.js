const removeFromArray = function (array, ...args) {
  array = array.filter((item) => !args.includes(item));
  return array;
};

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 2, 3));
console.log(removeFromArray([1, 2, 2, 4], 2));
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
console.log(removeFromArray([1, 2, 3, 4], 7, 2));
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
console.log(removeFromArray([1, 2, 3, 4], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
