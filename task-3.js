function findMissingNumber(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i] + 1;
    }
  }
  return "No missing number";
}
function findMissingNumber(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i] + 1;
    }
  }
  return "No missing number";
}

console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20])); // 13
console.log(findMissingNumber([1, 2, 3, 4, 6])); // 5
console.log(findMissingNumber([10, 11, 12, 14])); // 13
