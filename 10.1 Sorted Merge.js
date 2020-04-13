// Merge two sorted arrays, A and B. A should hold the merged sorted array
const mergeSortedArrays = (a, b) => {
  // As A will hold the merged array, we'll look at each array from it's last element,
  // compare which is larger, and move it to the end of array A (at indexMerged)
  // The pointers will start at the end of each array
  let pointerA = a.length - 1;
  let pointerB = b.length - 1;
  let indexMerged = a.length + b.length - 1;

  while (pointerB >= 0) {
    // if the end of A is larger than the end of B, copy A[i] to A[indexMerged]
    // The pointers are decremented as elements are copied from them
    if (pointerA >= 0 && a[pointerA] > b[pointerB]) {
      a[indexMerged] = a[pointerA];
      pointerA--;
    } else {
      a[indexMerged] = b[pointerB];
      pointerB--;
    }
    indexMerged--;
  }
  return a;
};

let testA = [1, 2, 4, 6, 7, 9, 12, 15];
let testB = [0, 3, 5, 8, 10, 14];
let mergedArray = mergeSortedArrays(testA, testB);

//TEST
mergedArray[0] === 0 && mergedArray[13] === 15
  ? console.log('Test passed')
  : console.log('Test failed');
