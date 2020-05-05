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

URLify('John Smith ') === 'John%20Smith'
  ? console.log('test passed')
  : console.log('test failed');
