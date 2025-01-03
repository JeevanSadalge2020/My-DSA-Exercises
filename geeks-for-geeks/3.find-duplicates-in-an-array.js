function findDuplicates(arr) {
  let l = arr.length;
  if (l === 0 || l === 1) return [];
  else {
    let obj = {};
    let result = [];
    for (const item of arr) {
      if (!Object.hasOwn(obj, item)) {
        obj[item] = 1;
      } else {
        obj[item] = obj[item] + 1;
        result.push(item);
      }
    }
    return result;
  }
}

console.log(findDuplicates([]));
console.log(findDuplicates([0]));
console.log(findDuplicates([1, 2, 3, 4, 1, 2]));
console.log(findDuplicates([1, 2, 3, 4]));
