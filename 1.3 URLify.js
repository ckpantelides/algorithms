// N.B this solution does not transform in place!!!
//Turn string into URL i.e. spaces in string become %20, spaces at end ignored
function URLify(string) {
  let URLarray = [];
  for (i = 0; i < string.length; i++) {
    if (
      string[i] === ' ' &&
      string[i - 1] !== ' ' &&
      string[i + 1] !== ' ' &&
      string[i + 1] !== undefined
    ) {
      URLarray.push('%20');
    } else if (string[i] !== ' ') {
      URLarray.push(string[i]);
    }
  }
  return URLarray.join('');
  console.log(URLarray.join(''));
}

// OR function takes array with space to fit everything plus a true length number that is the length
// of the string with no trailing spaces (true lenght includes spaces in the string). We want to make the
// changes in place
function URLify2(array, trueLength) {
  let spaceCount = 0;

  // first we need to count the spaces. As we increment only up to the true length, any trailing
  // spaces are missed.
  for (let i = 0; i < trueLength; i++) {
    if (array[i] === ' ') {
      spaceCount++;
    }
  }
  // newIndex is where the character will be place in the result array. Two extra spaces are needed
  // per original space to account for the extra character (%20)
  let newIndex = trueLength + spaceCount * 2;
  // decrement through the array from the true length, then add the character to the array at the new index
  // As we're starting at the trueLength,, trailing spaces are ignored
  for (let j = trueLength - 1; j >= 0; j--) {
    if (array[j] === ' ') {
      array[newIndex - 1] = 0;
      array[newIndex - 2] = 2;
      array[newIndex - 3] = '%';
      newIndex = newIndex - 3;
    } else {
      array[newIndex-1] = array[j];
      newIndex--;
    }
  } return array.join("");
}

/*
URLify('John Smith ') === 'John%20Smith'
  ? console.log('test passed')
  : console.log('test failed'); */

console.log(
  URLify2(
    [
      'M',
      'r',
      ' ',
      'J',
      'o',
      'h',
      'n',
      ' ',
      'S',
      'm',
      'i',
      't',
      'h',
      ' ',
      ' ',
      ' ',
      ' ',
    ],
    13
  )
);
