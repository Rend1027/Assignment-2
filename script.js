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

// Returns the index of the first occurence of value in array, starting from fromIndex, returns -1 if value is not present in array.
// If unspecified, fromIndex is 0.
function myIndexOf(arr,value,fromIndex=0) {
  let location = -1;
  let i = fromIndex;
  while (location === -1 && i < arr.length) {
    if (arr[i] === value) {
      location = i;
    }
    i++;
  }
 return location;
}
