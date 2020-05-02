// You have an array with numbers from 1 to N, where N is at most 32,000.
// The array may have duplicate numbers, and N is unknown. With only 4kb of memory
// how would you print all duplicate in the array

// N.B. Should a different typed array have been used?
// Uint8Array: An array of 8-bit unsigned integers - 1 byte per entry
// Uint32Array: An array of 32-bit unsigned integers - 4 bytes per entry

// 4kb = 4 * 8 bits * 2^10 = 32 * 1024, which is greater than 32,000
// Using a bit vector, we can iterate through the array, flag each element V by setting
// bit V to 1, and then print any duplicates we come across (as bit V will already by set)

class BitVector {
  constructor(size) {
    // Integars have a fixed size, usually 4 bytes, which means 8*4=32 bits (flags)
    this.store = [(size >> 5) + 1]; // divide by 32
  }
  set(bit, val) {
    let index = ~~(bit / 32); // Double tilde ~~ is used to convert some types to int
    let shift = ~~(bit % 32);
    let mask = 1 << shift;
    if (val) {
      this.store[index] = this.store[index] | mask;
    } else {
      this.store[index] = this.store[index] & ~mask;
    }
  }
  get(bit) {
    let index = ~~(bit / 32);
    let shift = ~~(bit % 32);
    let mask = 1 << shift;
    return (this.store[index] & mask) > 0;
  }
}

function checkDuplicates(array) {
  let vector = new BitVector(32000);
  // Initialise vector by setting all bits to 0

  for (let i = 0; i < 32000; i++) {
    vector.set(i, false);
  }

  // Loop through the array - setting this bit at index value -1 to 1. Before setting
  // any bits, we check whether it's been set previously (i.e. it's a duplicate). We use
  // index 'value-1' the bit index starts at 0, whereas the numbers start at 1)
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let num0 = num - 1; // BitVector index starts at 0, whereas numbers start at 1
    if (vector.get(num0)) {
      console.log(num);
    } else {
      vector.set(num0, true);
    }
  }
}

let testArray = [1, 2, 4, 5, 7, 9, 10, 14, 16, 55, 13, 14, 100];
checkDuplicates(testArray);
