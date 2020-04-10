//Given a positive integer, return the next smallest and largest number with the same
// number of 1 bits.

// We'll first count the 1 bits in the integer we have, and then loop through each larger & smaller
// integer, counting it's 1s each time, until we've found the next number with the same number of 1 bits.

// This helper function counts 1 bits by shifting the integer to the right and ANDing its rightmost
// bit with one
const countOnes = (int) => {
  let counter = 0;
  while (int != 0) {
    if (int & 1) {
      counter++;
    }
    int >>= 1;
  }
  return counter;
};

// First we count the bits in the integer, then decrement down counting the bits in each number
// until the number of 1 bits match
const smallestNum = (int) => {
  let onesInInt = countOnes(int);
  for (i = int - 1; i > 0; i--) {
    let onesInSmaller = countOnes(i);
    if (onesInInt === onesInSmaller) return i;
  }
};

// This increments instead to find the next largest number
const largestNum = (int) => {
  let onesInInt = countOnes(int);
  for (i = int + 1; i < int * 1000; i++) {
    let onesInLarger = countOnes(i);
    if (onesInInt === onesInLarger) return i;
  }
};

//TESTS
smallestNum(8) === 4 ? console.log('Test passed') : console.log('Test failed');
smallestNum(16) === 8 ? console.log('Test passed') : console.log('Test failed');
largestNum(8) == 16 ? console.log('Test passed') : console.log('Test failed');
