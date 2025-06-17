// Returns true if value appears in array, returns false otherwise
function myIncludes(arr, value) {
  let present = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      present = true;
    }
  }
  return present;
}
