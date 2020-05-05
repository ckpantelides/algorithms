// Print all valid (e.g. properly opened and closed) combinations of n pairs of parenthesis
// For n === 2 combinations === ()(), (())

function getParens(n) {
  //String will hold each single combination of parentheses ie. ()() or (()) etc
  string = '';
  // Results will hold the different combinations
  results = [];
  parensUtil(results, n, n, string, 0);
  return results;
}

function parensUtil(results, leftRem, rightRem, string, index) {
  // On each recursive call of the function, a left or right paren is selected to be put at the index
  // As long as a left paren is left, it's selected. A right paren can be selected
  // so long as there aren't more right than left parens (as the parens have to be properly opened
  // and closed)
  if (leftRem < 0 || rightRem < leftRem) return; //invalid state
  if (leftRem === 0 && rightRem === 0) {
    // Out of parentheses therefore push the string to the result array
    results.push(string);
  } else {
    // Strings are immutable in JS. To set a char at an index, a new string must be created
    string = string.substring(0, index) + '(' + string.substring(index + 1);
    // Recurse by decreasing the number of left parens until 0, and increasing the index
    parensUtil(results, leftRem - 1, rightRem, string, index + 1);
    // Once there are no more left parens, recurse with the right paren
    string = string.substring(0, index) + ')' + string.substring(index + 1);
    parensUtil(results, leftRem, rightRem - 1, string, index + 1);
  }
}

console.log(getParens(4));
