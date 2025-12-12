const repeatString = function (string, amount) {
  let finalString = "";
  if (amount < 0) {
    finalString = "ERROR";
  }
  for (let i = 0; i < amount; i++) {
    finalString = finalString += string;
  }
  return finalString;
};

function randomNum(num) {
  num = Math.floor(Math.random() * num);
  return num;
}

console.log(repeatString("hey", 3));
console.log(repeatString("hello", 10));
console.log(repeatString("hi", 1));
console.log(repeatString("bye", 0));
console.log(repeatString("goodbye", -1));
console.log(repeatString("hey", randomNum(10)));
console.log(repeatString("", 10));

// Do not edit below this line
module.exports = repeatString;
