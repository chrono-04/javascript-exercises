const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  let fibSequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
  }
  return fibSequence[n];
};

console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(10));
console.log(fibonacci(15));
console.log(fibonacci(25));
console.log(fibonacci(0));
console.log(fibonacci(-25));
console.log(fibonacci("0"));
console.log(fibonacci("1"));
console.log(fibonacci("2"));
console.log(fibonacci("8"));

// Do not edit below this line
module.exports = fibonacci;
