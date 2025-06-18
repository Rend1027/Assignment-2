// -----   ForEach  ------
const print = (index, arr,) => {
console.log("This are the elements -->", arr[index]);
}
const myForEach = (arr,callback) => {
    for(let i = 0; i < arr.length; i++) {
        callback(i,arr)
    }
}

let array1 = [1, 2, 3, 4, 5];
myForEach(array1, print);


// ------  map  -------
const addOne = (index, arr) => {
    arr[index] += 1
}

const myMap =(arr, callback) => {
    let copyOfArr = [...arr]
    for(let i = 0; i < copyOfArr.length; i++) {
        callback(i, copyOfArr);
    }
    return copyOfArr;
}

let arr2 = [4, 5, 6];
console.log("Before map--->", arr2)
console.log("After map--->", myMap(arr2, addOne));


// ----- filter -----
let arr3 = [1,2,3,4,5,6];

const isEvenNumber = (index, arr) => {
    if(arr[index] % 2 == 0) {
        return true
    } else return false;
}

const myFilter= (arr, callback) => {
    let copyOfArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(callback(i, arr) === true) {
           copyOfArr.push(arr[i])
        };
    }
    return copyOfArr;
}

console.log("Before Filter -->", arr3)
console.log("After filter --->", myFilter(arr3,isEvenNumber ))


// ----- some() ----

let arr4 = [80, 85, 90, 65, 91];


const greaterThan90 = (index, arr) => {
    let standard = 90;
    if(arr[index] > standard ) {
        return true;
    } else return false;
}

const  mySome= (arr, callback) => {
    let currentElement = true;
    for(let i = 0; i < arr.length; i++) {
        if(callback(i, arr)) {
            currentElement = true
        } else currentElement = false
    }
   return currentElement;
} 
console.log("Before some-->", arr4)
console.log("After some() --->", mySome(arr4,greaterThan90))


// ---- every() ----- 

let array5 = [9, 51, 11, 12, 13];

const lessThan50 = (index, arr) => {
    if(arr[index] < 50) {
        return true
    } else return false;
}

const myEvery = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if(callback(i,arr) === false) {
            return false;
        }
    } return true;
}

console.log("Before every()--->", array5);
console.log("After every()--->", myEvery(array5,lessThan50));


// ----- reduce -----
// let arr = [1,2,3,4,5];
// myReduce(arr, cb, initialValue);
// should result in, if summing: 15;

let array6 = [1, 2, 5, 10];
let array7 = ["c", "a", "t"]

const accumulate = (acc, cuurenValue) => {
    return acc + cuurenValue
}

const myReduce = (arr, callback, initialValue) => {
    let startingIndex = 0;

    if(initialValue === undefined){
        startingIndex = 1;
        initialValue = arr[0];
    }
    let runninSum = initialValue;
// i should not = 0 when initial value is undefined
    for(let i = startingIndex; i < arr.length; i++) { 
            runninSum = callback(runninSum, arr[i]);
    }
    return runninSum;
}

console.log("Before myReduce", array6)
console.log("After myReduce", myReduce(array6, accumulate,0))


// ----- myincludes -----
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

// Returns an array containing all the keys in obj
function grabKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys[keys.length] = key;
  }
  return keys;
}

// Returns an array including all the values in obj
function grabValues(obj) {
  const values = [];
  for (const key in obj) {
    values[values.length] = obj[key];
  }
  return values;
}



// ----- Miscellaneous -----
 /* Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.*/
 
 let nums = [0,1,0,3,12]
 function moveZeros (nums) {
  let counter = 0;
  if(myIncludes(nums, 0)) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
          nums.splice(i,1)
          counter++;
        }
    }
    for (let i = counter; i > 0; i--) {
      nums.push(0)
    }
  }
  return nums;
 }

 console.log("Before move zeros--->", nums);
 console.log("After move zeros--->", moveZeros(nums))