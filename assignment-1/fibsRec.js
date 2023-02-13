function fibsRec(n) {
  if (n <= 0 || isNaN(n)) return "Please enter a valid number";

  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}

console.log(fibsRec(-7)); // Please enter a valid number
console.log(fibsRec(0)); // Please enter a valid number
console.log(fibsRec(2)); // [0, 1]
console.log(fibsRec(4)); // [0, 1, 1, 2]
console.log(fibsRec(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibsRec(12)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
