// Write a program to swap odd and even bits in an integer with as few instructions as
// possible (e.g. bit 0 and 1 are swapped, bit 2 and 3 are swapped)

// Essentially, the even bits need shifting to the left, whereas the odd bits need shifting
// to the right. We can create two masks - one masking the even bits the second the odd bits,
// shift the two numbers as appropriate and then OR then

// AND 0 turns off bits, therefore a mask of 10101010 (or Hex aaaaa) will turn off the even bits
// 01010101 (or Hex 55555) will turn off the even bits.

function swapBits(n) {
  // let evenBitsOff = 0xaaaaaaa;
  // let oddBitsOff = 0x55555555;
  let evenBitsOff = 0b10101010;
  let oddBitsOff = 0b01010101;

  // Merge with OR, as OR 1 turns on bits, OR 0 does nothing
  return (((n & evenBitsOff) >>> 1) | ((n & oddBitsOff) << 1)).toString(2);
}

let evenBitsOff = 0b10101010;
let oddBitsOff = 0b01010101;

let testA = 0b01100110;

swapBits(testA) == '10011001'
  ? console.log('Test passed')
  : console.log('Test failed');
