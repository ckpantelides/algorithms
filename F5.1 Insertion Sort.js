function insertionSort(arr) {
  let length = arr.length;
  // We start at 1 as the 0th element has nothing to compare against
  for (let i = 1; i < length; i++) {
    let key = arr[i];
    let j = i - 1;
    // We then decrement down from the element to the left of i, shifting the index
    // of each element up one until we find an element smaller than our element
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // Once a smaller element has been found, we insert our element to the right of it
    arr[j + 1] = key;
  }
  return arr;
}

let testArr = [1, 4, 3, 5, 6, 2];
console.log(insertionSort(testArr));
