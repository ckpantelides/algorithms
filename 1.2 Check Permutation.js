//Check if two strings are permutations of eachother

//does letter case matter? What about white space?
// helper function to sort the strings
function sortString(string) {
  return string
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

//If strings are not the same length, they cannot be permutations
function checkPermutation(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }
  return sortString(stringA) === sortString(stringB);
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
