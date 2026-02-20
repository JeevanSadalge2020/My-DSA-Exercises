/*
    - There is a input array
    - if length === 0, then return []
    - create a new array
    - array_has_atleast_a_single_array_element - use some method of array
    - check in while loop if this is true
    - if true, assign arr.flat() to arr, else exit from the loop

*/

function flatten(value) {
  if (!Array.isArray(value)) return [];
  if (value.length === 0) return [];

  //   function check_if_arr_contains_arr(arr) {
  //     return arr.some((ele) => {
  //       if (Array.isArray(ele)) return true;
  //     });
  //   }

  //   while (check_if_arr_contains_arr(value)) {
  //     value = value.flat();
  //   }

  return value.flat(Infinity);
}
