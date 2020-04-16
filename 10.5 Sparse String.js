// Given a sorted array of strings interspersed with empty strings, find the
// location of a given string

// Binary search can be modified for this purpose as the strings are sorted.
// If the mid value is an empty string, we'll just look for the nearest string before recursing
const binarySearch = (value, array, start, end) => {
  let mid = Math.floor((start + end) / 2);
  if (array[mid] === value) {
    return mid;
  }
  // If array[mid] is empty, look to the right and left to find the
  // nearest string, then use that index as the mid
  if (array[mid] === '') {
    let left = mid - 1;
    let right = mid + 1;
    while (true) {
      if (left < start && right > end) {
        return null;
      }
      if (array[left] != '') {
        mid = left;
        break;
      } else if (array[right] != '') {
        mid = right;
        break;
      }
      left--;
      right++;
    }
  }
  while (start <= end) {
    // Comparing the first character of the string, look to the left if the midpoint is
    // larger than the searched-for string, else look to the right
    if (array[mid][0] > value[0]) {
      return binarySearch(value, array, 0, mid - 1);
    } else {
      return binarySearch(value, array, mid + 1, end);
    }
  }
  return null;
};

let testArray = ['', '', 'at', 'bat', '', '', 'cat', '', 'dig', ''];
console.log(binarySearch('dog', testArray, 0, testArray.length - 1));
