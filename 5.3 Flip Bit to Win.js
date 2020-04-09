// You can flip one 0 bit in an integer to 1. Find the longest
// sequence of ones you can make
const longestOnes = function (int) {
  let counter = 0;
  let maxLength = 0;
  let previousZero = false;
  // By rightshifting the int, we can compare the bit at index 1 with 1.
  // If the bit & 1 is not zero, the bit must be 1 (as &0 is 0)
  while (int != 0) {
    //If the bit is 1, increase the counter
    if (int & 1) {
      counter++;
      //If the bit is 0, but there's been no previous 0 in the sequence,
      // increase the counter, but turn the preziousZero flag to true
    } else if (!(int & 1) && previousZero === false) {
      counter++;
      previousZero = true;
      // If the bit is 0 and there's been a previous 0, update the maxLength counter
      // then resent the counter and previousZero bool
    } else if (!(int & 1) && previousZero === true) {
      maxLength = Math.max(counter, maxLength);
      previousZero = false;
      counter = 0;
    }
    //Righshifting by 1 allows to to iterate through the int
    int >>= 1;
  }
  return (maxLength = Math.max(counter, maxLength));
};

// TESTS
longestOnes(51) === 3 ? console.log('Test passed') : console.log('Test failed'); // 5 = 110011
longestOnes(27) === 5 ? console.log('Test passed') : console.log('Test failed'); // 27 = 11011
longestOnes(125426937) === 7
  ? console.log('Test passed')
  : console.log('Test failed'); // int = 111011110011101110011111001

// Previous alorithm shifted a mask by 1 rather than shifting the integer
/*
const getBit = (num, i) => {
  return (num & (1 << i)) != 0;
};

const longestOnes = function (int, bits) {
  let counter = 0;
  let maxLength = 0;
  let previousZero = false;
  for (i = 0; i < bits; i++) {
    if (getBit(int, i)) {
      counter++;
    } else if (!getBit(int, i) && previousZero === false) {
      counter++;
      previousZero = true;
    } else if (!getBit(int, i) && previousZero === true) {
      maxLength = Math.max(counter, maxLength);
      previousZero = false;
      counter = 0;
    }
  }
  return maxLength;
};
*/
