// Check if a sequence of brackets is balanced
function isBalanced(s) {
  let open = [];
  let result = 'YES';
  const openBrackets = new Set(['(', '[', '{']);

  const bracketCorrespondence = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let c of s) {
    if (openBrackets.has(c)) {
      open.push(c);
    } else if (
      bracketCorrespondence[c] &&
      open.pop() !== bracketCorrespondence[c]
    ) {
      result = 'NO';
    }
  }
  if (open.length != 0) {
    result = 'NO';
  }
  return result;
}

const test1 = '{[()]}';
const test2 = '{[(])}';
const test3 = '{{[[(())]]}}';

isBalanced(test2);
