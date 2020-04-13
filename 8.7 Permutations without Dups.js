const stringPermutations = (string) => {
  let results = [];
  // Base case.
  if (string.length < 2) {
    results.push(string);
    return results;
  }
  // The permutations of a string with length n are the same as the permuations of a string
  // with length n-1, with the character n being inserted into every position of the permutations of n-1
  for (let i = 0; i < string.length; i++) {
    // The ith character of the string is stored, then the stringPermutations function is recursively called
    // repeatedly on the remaining characters in the string, until the base case is reached and the function
    // stack is unravelled (and the function continues to step 3 below). The process is then repeated for the ith+1
    // character, until the end of the string is reached
    let firstChar = string[i];
    let otherChar = string.substring(0, i) + string.substring(i + 1);
    let otherPermutations = stringPermutations(otherChar);
    // Step 3 after base case reached
    for (let j = 0; j < otherPermutations.length; j++) {
      results.push(firstChar + otherPermutations[j]);
    }
  }
  return results;
};

stringPermutations('abc');
