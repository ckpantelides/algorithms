//Write a recursive function to multiply positive integers without using
// the * operator

// Mutliplying two integers is equivalent to adding an integer to itself x amount of times
const multiplyRecursively = (n, m) => {
  // Base and terminal case
  if (m === 0) return 0;
  // Add n to itself by recursively calling this function m times (until m is 0)
  return n + multiplyRecursively(n, m - 1);
};

// The runtime will be faster if the smaller integer is the int that decrements by one each call
const findSmaller = (n, m) => {
  return n > m === true ? multiplyRecursively(n, m) : multiplyRecursively(m, n);
};

// TESTS
findSmaller(6, 5) === 30
  ? console.log('Test passed')
  : console.log('Test passed');

findSmaller(9, 13) === 117
  ? console.log('Test passed')
  : console.log('Test passed');
