const mergeSort = (arr) => {
  // The array is repeatedly split until each subarray has one element. The merge
  // function is then called, which compares the size of each element and combines them
  // in size order
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
    left = mergeSort(arr.slice(0, mid)),
    right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (arr1, arr2) => {
  let result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) result.push(arr1.shift());
    else result.push(arr2.shift());
  }

  result = [...result, ...arr1, ...arr2];
  return result;
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

console.log(mergeSort(unsortedArr));
