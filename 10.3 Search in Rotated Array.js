// Given a sorted array of n integers that has been rotated an unknown number
// of times, write code to find an element in the array. The array was originally sorted
// in increasing order.

// A rotated array has had its elements shifted a number of times, with the
// elements at the end rejoining at the start of the array

// This solution is for an array with unique values. Else a condition if(array[left] ===
// array[mid] is needed)

const searchRotated = (x, array, left, right) => {
  let mid = Math.floor((left + right) / 2);
  if (x === array[mid]) {
    return mid;
  }
  if (right < left) {
    return -1;
  }
  // One half of a rotated array will always be ordered normally. First we find out which
  // half is ordered normally, then see if x is within that half. If it is, search this half,
  // else search the other half
  if (array[left] < array[mid]) {
    // Left is normally ordered
    if (x >= array[left] && x <= array[mid]) {
      // x is within lefthand side
      return searchRotated(x, array, 0, mid);
    } else {
      // x is within the righthand side
      return searchRotated(x, array, mid + 1, right);
    }
  } else if (array[left] > array[mid]) {
    // right is normally ordered
    if (x >= array[mid] && x <= array[right]) {
      return searchRotated(x, array, mid, right);
    } else {
      return searchRotated(x, array, 0, mid - 1);
    }
  }
  return -1;
};

// TEST

testArray = [10, 12, 13, 1, 2, 4, 5, 6, 8, 9];

searchRotated(12, testArray, 0, testArray.length - 1) === 1
  ? console.log('Test passed')
  : console.log('Test failed');

searchRotated(11, testArray, 0, testArray.length - 1) === -1
  ? console.log('Test passed')
  : console.log('Test failed');
