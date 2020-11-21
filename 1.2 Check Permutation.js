//Check if two strings are permutations of eachother

//does letter case matter? What about white space?
// helper function to sort the strings
function sortString(string) {
  return string.toLowerCase().split('').sort().join('');
}

//If strings are not the same length, they cannot be permutations
function checkPermutation(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }
  return sortString(stringA) === sortString(stringB);
}

// OR

function checkPermutation2(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let letters = new Array(128).fill(0); // 128 assumes ASCII
  // iterate string1, increment number at letters[i] each time letter found
  for (let i = 0; i < string1.length; i++) {
    letters[string1.charCodeAt(i)]++;
  }
  // iterate string2. Decrement number at letters[j]. If below zero, new letter found.
  // As strings are same length, any different characters will be caught
  for (let j = 0; j < string2.length; j++) {
    letters[string2.charCodeAt(j)]--;
    if (letters[string2.charCodeAt(j)] < 0) {
      return false;
    }
  }
  return true;
}

checkPermutation('dogeatsfood', 'fooddogeats') === true
  ? console.log('test passed')
  : console.log('test failed');
checkPermutation('DogEatsFood', 'fooddogeats') === true
  ? console.log('test passed')
  : console.log('test failed');
checkPermutation('turtle', 'tortoise') === false
  ? console.log('test passed')
  : console.log('test failed');
checkPermutation('hellothere1', 'hellothere2') === false
  ? console.log('test passed')
  : console.log('test failed');

checkPermutation2('dogeatsfood', 'fooddogeats') === true
  ? console.log('test passed')
  : console.log('test failed');
checkPermutation2('hellothere1', 'hellothere2') === false
  ? console.log('test passed')
  : console.log('test failed');
