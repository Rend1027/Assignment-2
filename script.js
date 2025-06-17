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

// Appends elements to the end of the given array and returns the length of the new array. Multiple elements can be added.
function myPush(arr,elem1,elem2,elem3) {
  for (let i = 1; i < arguments.length; i++) {
    arr[arr.length] = arguments[i];
  }
  return arr.length;
}

// Returns the index of the last occurence of value in array. Returns -1 if value is not present in array.
function myLastIndexOf(arr,value) {
  let location = -1;
  let i = arr.length - 1;
  while (location === -1 && i > -1) {
    if (arr[i] === value) {
      location = i;
    }
    i--;
  }
 return location;
}

// Returns an array including all the keys in obj
function grabKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys[keys.length] = key;
  }
  return keys;
}
