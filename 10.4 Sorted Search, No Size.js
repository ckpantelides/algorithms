// Search through an array like structure Listy that lacks a size method. It has an
// elementAt(i) method that returns the element at index i. If an index is out of bounds
// -1 if returned

// I'll mock Listy using an array, therefore if an element is out of bounds it will return
// undefined

// As there's no size method, we need to find an upper bound for a binary search
const searchListy = (value, datastructure) => {
  let index = 1;
  while (datastructure[index] != undefined && datastructure[index] < value) {
    // rather than increasing the index linearly, we'll do it exponentially so the function
    // can run in O(log n) time
    index *= 2;
  }
  // Once our index is out of bounds or the element at the index is larger than the value we're
  // searching for, perform a binary search
  return binarySearch(value, datastructure, index / 2, index);
};

// As the binary search also has a runtime of O(log n), both parts together run at O (log n);
const binarySearch = (value, datastructure, low, high) => {
  let mid = Math.floor((high + low) / 2);
  if (datastructure[mid] === value) {
    return mid;
  }
  while (low <= high) {
    if (datastructure[mid] > value || datastructure[mid] === undefined) {
      return binarySearch(value, datastructure, 0, mid - 1);
    } else {
      return binarySearch(value, datastructure, mid + 1, high);
    }
  }
  return -1;
};

let testArray = [0, 1, 2, 3, 4, 5, 6, 12, 14, 18];

console.log(listyBounds(15, testArray));
