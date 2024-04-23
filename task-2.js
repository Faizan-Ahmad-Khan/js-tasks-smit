function findMinMax(arr) {
  let min = arr[0],
    max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min: min, max: max };
}

console.log(findMinMax([1, 2, 3, 4, 5])); // {min: 1, max: 5}
console.log(findMinMax([-1, -2, -3, -4, -5])); // {min: -5, max: -1}
console.log(findMinMax([0, 100, 200, 300, 400])); // {min: 0, max: 400}
