function missingNumber(n, arr) {
  let ideal_sum = (n * (n + 1)) / 2;
  let actual_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    actual_sum = actual_sum + arr[i];
  }
  return ideal_sum - actual_sum;
}

console.log(missingNumber(5, [2, 3, 4, 5]));
console.log(missingNumber(5, [1, 2, 3, 5]));
console.log(missingNumber(2, [1]));
