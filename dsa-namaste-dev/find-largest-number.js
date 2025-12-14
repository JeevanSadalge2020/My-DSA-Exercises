function findLargest(arr) {
  if (Array.isArray(arr) === false) return false;
  if (arr.length === 0) return null;
  let if_array_contains_finite_numbers = arr.every((num) =>
    Number.isFinite(num)
  );
  if (if_array_contains_finite_numbers === false) return false;
  return Math.max(...arr);
}
