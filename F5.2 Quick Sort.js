const quickSort = (array, start = 0, end = array.length - 1) => {
  if (start < end) {
    // The pivotIndex is the index of our first sorted element (sorted via the partition function)
    // Once found we recursively call quickSort on the elements to the left and right of the pivot
    let pivotIndex = partition(array, start, end);
    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
  }
  return array;
};

const partition = (array, start, end) => {
  // As the array is unsorted, any element can be chosen as the pivot. We'll use the first element
  let pivot = array[start];
  // The pointer will keep track of the pivot's index in the array, and pass it back to quickSort
  let pointer = start;
  // We loop through the array, shifting the index of each element down by one until there
  // are elements smaller than the pivot to the right of the pointer. The pointer keeps track of where the
  // pivot should be in the array, however the pivot is not put into place until all the array has
  // been searched through
  for (let i = start; i <= end; i++) {
    if (array[i] < pivot) {
      pointer++;
      swap(array, pointer, i);
    }
  }
  // Once the partition point has been found, we swap the pivot from the start of the array
  // to it's sorted position (i.e. where the pointer is)
  swap(array, start, pointer);
  // We then return the pointer to quickSort
  return pointer;
};

const swap = (list, a, b) => {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
};

const unsortedArr = [
  31,
  27,
  28,
  42,
  13,
  8,
  11,
  30,
  17,
  41,
  15,
  43,
  1,
  36,
  9,
  16,
  20,
  35,
  48,
  37,
  7,
  26,
  34,
  21,
  22,
  6,
  29,
  32,
  49,
  10,
  12,
  19,
  24,
  38,
  5,
  14,
  44,
  40,
  3,
  50,
  46,
  25,
  18,
  33,
  47,
  4,
  45,
  39,
  23,
  2,
];
console.log(quickSort(unsortedArr));
