function mergeSort(arr) {
  if (!Array.isArray(arr)) return "Please provide an array";
  if (arr.length <= 0) return "Please provide a valid array";
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
  let result = [];

  let j = 0;
  let k = 0;

  while (j < leftArr.length && k < rightArr.length) {
    if (leftArr[j] < rightArr[k]) {
      result.push(leftArr[j]);
      j++;
    } else {
      result.push(rightArr[k]);
      k++;
    }
  }

  while (j < leftArr.length) {
    result.push(leftArr[j]);
    j++;
  }

  while (k < rightArr.length) {
    result.push(rightArr[k]);
    k++;
  }

  return result;
}

console.log(mergeSort(44)); // Please provide an array
console.log(mergeSort([])); // Please provide a valid array
console.log(mergeSort([0])); // [0]
console.log(mergeSort([1, 4, 5, 3, 6, 2])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSort([1, 3, 9])); // [1, 3, 9]
console.log(mergeSort([865, 902, 3, 1, 46])); // [1, 3, 46, 865, 902]
