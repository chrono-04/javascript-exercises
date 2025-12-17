const palindromes = function (word) {
  const cleaned = word.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedWord = cleaned.split("").reverse().join("");
  return reversedWord === cleaned;
};

console.log(palindromes("racecar"));
console.log(palindromes("racecar!"));
console.log(palindromes("Racecar!"));
console.log("A car, a man, a maraca.");
console.log("Animal loots foliated detail of stool lamina.");
console.log("ZZZZ car, a man, a maracaz.");
console.log("rac3e3car");
console.log("r3ace3car");

// Do not edit below this line
module.exports = palindromes;
