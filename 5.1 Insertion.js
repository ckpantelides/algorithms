// Write a method to insert M into N, such that M starts at bit j and ends
// at bit i. j through i have enough space to fit M.
// N = 10000; M = 101; j = 3; i = 1; MinsideN = 11010;

// First clear the the bits j through i in N with &0, which turns off bits.
// To create this mask i.e. 1110001111, we can create the lefthand and the righthand mask sides,
// and | them as |1 turns on bits
const MinsideN = (M, N, i, j) => {
  let leftMask = -1 << (j + 1); // i.e. 111100000
  let rightMask = (1 << i) - 1; // i.e 00001111
  let mask = leftMask | rightMask;
  let clearedN = N & mask;
  // We can OR M and N together now, however first we need to leftshift M by i, so its bits line up
  // with j and i in N
  let shiftedM = M << i;
  return (shiftedM | clearedN).toString(2);
};

MinsideN(0b101, 0b10000, 1, 3) == 11010
  ? console.log('Test passed')
  : console.log('Test failed');
MinsideN(0b11001, 0b10111000011, 3, 7) == 10111001011
  ? console.log('Test passed')
  : console.log('Test failed');
MinsideN(0b101, 0b10000, 2, 4) == 10100
  ? console.log('Test passed')
  : console.log('Test failed');
MinsideN(0b11001, 0b10111000011, 5, 9) == 11100100011
  ? console.log('Test passed')
  : console.log('Test failed');
