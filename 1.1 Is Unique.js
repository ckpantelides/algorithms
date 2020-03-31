// Determine if a string has all unique characters
// Ctrl+Alt+N to run with Code Runner extension on VScode

function isUnique(string) {
  // clarify if string is only unicode characters
  // if string has more characters than unicode, chars cannot be unique
  if (string.length > 128) return false;

  let charMap = new Map();
  // iterate through each character
  for (let i = 0; i < string.length; i++) {
    //
    if (charMap.has(string[i])) {
      return false;
    }
    charMap.set(string[i], true);
  }
  return true;
}

//tests
isUnique('abcdefghijk') === true
  ? console.log('test passed')
  : console.log('test failed');
isUnique('abcdefghhhhhijk') === false
  ? console.log('test passed')
  : console.log('test failed');
isUnique('abcde fgh ijk') === false
  ? console.log('test passed')
  : console.log('test failed');
