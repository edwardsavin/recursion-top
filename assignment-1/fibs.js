function fibs(n) {
  array = [];
  firstNumber = 1;
  secondNumber = 1;

  array.push(firstNumber);
  array.push(secondNumber);

  if (n <= 0) {
    return "Please enter a valid number";
  }

  if (n === 1) {
    array = [1];
  }

  if (n === 2) {
    array = [2];
  }

  for (let i = 3; i <= n; i++) {
    let newNumber = array[i - 3] + array[i - 2];
    array.push(newNumber);
  }

  return array;
}

console.log(fibs(-7)); // Please enter a valid number
console.log(fibs(0)); // Please enter a valid number
console.log(fibs(2)); // [2]
console.log(fibs(4)); // [1, 1, 2, 3]
console.log(fibs(7)); // [1, 1, 2, 3, 5, 8, 13]
console.log(fibs(12)); // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
