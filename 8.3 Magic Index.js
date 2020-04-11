// A magic index is when A[i] = i. Given a sort array of distinct integers, see
// if there is a magic array.

// We could look at all elements, but adopting binary search is faster
const magicIndex = (array, start, end) => {
  let mid = Math.floor(start + (end - start) / 2);
  // Terminal case - there is no magic index
  if (end < start) return false;
  if (array[mid] === mid) return mid;
  // Recurse. If middle index is bigger than the middle element, all items to the right
  // in the array will also be bigger then their index. We therefore search the lefthand side
  else if (array[mid] > mid) return magicIndex(array, 0, mid);
  // Alternatively search the righthand side
  else {
    return magicIndex(array, mid + 1, end);
  }
};

//TESTS
let testArr1 = [-2, -1, 0, 2, 3, 4, 5, 6, 7, 8, 10];
let testArr2 = [-2, 1, 3, 4, 5, 6, 7, 8, 10];
let testArr3 = [0, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 20, 30, 44];

magicIndex(testArr1, 0, testArr1.length - 1) === 10
  ? console.log('Test passed')
  : console.log('Test failed');

magicIndex(testArr2, 0, testArr2.length - 1) === 1
  ? console.log('Test passed')
  : console.log('Test failed');

magicIndex(testArr3, 0, testArr3.length - 1) === 0
  ? console.log('Test passed')
  : console.log('Test failed');
