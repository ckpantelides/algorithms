// Implement a method to perform basic string compression by counting the number
// of repeated charaters. "aaabbcaa" => "a3b2c1aa". If the compressed string is not
// shorter than the original string, return the original

const stringCompression = (string) => {
  let result = '';
  // This will count the occurences of each letter
  let counter = 1;
  let i = 0;
  while (i < string.length) {
    // If the next char is the same as the current char, increase the
    // counter
    if (string[i] === string[i + 1]) {
      counter++;
    } else {
      // Else add this char to the result string with its counter, and reset the counter
      result += string[i] + counter;
      counter = 1;
    }
    i++;
  }
  // If the result length is more than the string length, return the original string
  return result.length < string.length ? result : string;
};

// TESTS
stringCompression('aaaabbbccaad') === 'a4b3c2a2d1'
  ? console.log('Test passed')
  : console.log('Test failed');
