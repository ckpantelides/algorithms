// check if a string is a permutation of a palindrome
// N.B. consider using the bit vector method, where all letters are assigned as
// 0 or 1 in an integer (which has 32 bits)
function palindromePerm(string) {
  // remove any spaces from the string
  // turn string to lowercase
  string = string.replace(' ', '').toLowerCase();
  let charObj = {};
  for (let i = 0; i < string.length; i++) {
    if (charObj.hasOwnProperty(string[i])) {
      charObj[string[i]] += 1;
    } else {
      charObj[string[i]] = 1;
    }
  }
  let resultCount = 0;
  for (const el in charObj) {
    resultCount += charObj[el] % 2;
  }
  if (string.length % 2 === 0 && resultCount === 0) {
    return true;
  } else if (string.length % 2 !== 0 && resultCount === 1) {
    return true;
  } else {
    return false;
  }
}

// Tests
palindromePerm('hiih') === true
  ? console.log('test passed')
  : console.log('test failed');
palindromePerm('hello there') === false
  ? console.log('test passed')
  : console.log('test failed');
palindromePerm('Do geese see God') === true
  ? console.log('test passed')
  : console.log('test failed');
palindromePerm('Rats live on no evil star') === true
  ? console.log('test passed')
  : console.log('test failed');
palindromePerm('Rats live on no evils stary') === false
  ? console.log('test passed')
  : console.log('test failed');
