// There are three types of edits that can be performed on a string - insert a char, remove
// a char or replace a char. Compare two strings and check if there are more than one edit away

const oneEditAway = (stringA, stringB) => {
  // If the string lengths have a difference of more than one, at least two edits are needed
  if (Math.abs(stringA.length - stringB.length) > 1) {
    return false;
  }
  // We'll find the shorter string, and use two difference pointers whiles iterating through them
  let shorterString = stringA.length < stringB.length ? stringA : stringB;
  let longerString = stringA.length < stringB.length ? stringB : stringA;
  let pointerA = 0;
  let pointerB = 0;
  // This will track if there's already one difference between the strings
  let differenceFound = false;

  while (pointerA < longerString.length && pointerB < longerString.length) {
    if (shorterString[pointerA] != longerString[pointerB]) {
      // If the character's aren't equal and there's already been a difference found, return false
      if (differenceFound) {
        return false;
      }
      // Else make a note of the difference found
      differenceFound = true;
      // If the strings are the same length, move the pointer for the shorter string
      // If they're not the pointer for the longer string will move to check if the next char matches
      if (shorterString.length === longerString.length) {
        pointerA++;
      }
      // If the chars are the same move the pointer on the shorter string
    } else {
      pointerA++;
    }
    // The pointer for the longer string always moves
    pointerB++;
  }
  return true;
};

// TESTS
oneEditAway('help', 'elp')
  ? console.log('Test passed')
  : console.log('Test failed');

!oneEditAway('help', 'kelk')
  ? console.log('Test passed')
  : console.log('Test failed');

oneEditAway('help', 'kelp')
  ? console.log('Test passed')
  : console.log('Test failed');
