function chunkArray(arr, n) {
  if (arr.length === 0) return [];

  let res = [];
  for (let i = 0; i < arr.length; i = i + n) {
    let subArr = arr.slice(i, i + n);
    res.push(subArr);
  }
  return res;
}

console.log(chunkArray([], 2));
console.log(chunkArray([1], 1));
console.log(chunkArray([1, 2], 1));
console.log(chunkArray([1, 2], 2));
console.log(chunkArray([1, 2, 3], 2));
console.log(chunkArray([1, 2, 3, 4], 2));
console.log(chunkArray([1, 2, 3, 4, 5], 3));
console.log(chunkArray([1, 2, 3, 4, 5], 4));
console.log(chunkArray([1, 2, 3, 4, 5], 5));
