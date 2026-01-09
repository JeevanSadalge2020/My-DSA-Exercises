function countEvens(arr) {
  if (Array.isArray(arr) === false) return false;
  if (arr.length === 0) return 0;

  let count = 0;
  for (const item of arr) {
    if (Number.isFinite(item) === false) return false;
    if (item % 2 === 0) count++;
  }
  return count;
}

console.log(countEvens(null));
console.log(countEvens(undefined));
console.log(countEvens({}));
console.log(countEvens(true));
console.log(countEvens([]));
console.log(countEvens([2]));
console.log(countEvens([-2]));
console.log(countEvens([0]));
console.log(countEvens([-Infinity]));
console.log(countEvens([Infinity]));
console.log(countEvens([NaN]));
console.log(countEvens([undefined, 1, 2]));
console.log(countEvens([1]));
console.log(countEvens([2, 2, 4, 6, 8]));
