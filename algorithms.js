//SORTING ALGORITHMS//

/*------------*/
/* QUICK SORT */
/*------------*/

function quick_Sort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;

    for (var i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }

    return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
}

var myArray = [3, 0, 2, 5, -1, 4, 1];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);

/*-------------*/
/* BUBBLE SORT */
/*-------------*/

function bubbleSort(arr1) {
  var countArr1 = arr1.length - 1;
  var swapArr1 = 0;
  for (var i = 0; i < countArr1; i++) {
    for (var j = 0; j < countArr1; j++) {
      if (arr1[j] > arr1[j + 1]) {
        swapArr1 = arr1[j + 1];
        arr1[j + 1] = arr1[j];
        arr1[j] = swapArr1;
      }
    }
  }
  return arr1;
}

console.log(bubbleSort([2, 4, 5, 3, 6, 7, 4, 2]));

/*------------*/
/* MERGE SORT */
/*------------*/

function mergeSort(arr) {
  let length = arr.length;
  if (length < 2) {
    return arr;
  } else {
    let mid = Math.floor(length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift);
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift);
  }
  return result;
}
