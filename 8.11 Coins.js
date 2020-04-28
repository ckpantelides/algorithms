// Given an infinite number of quarters, dimes, nickels and pennies, calculate the number of
// ways of representing n cents

function makeChange(n) {
  let denoms = [25, 10, 5, 1];
  return makeChangeUtil(n, denoms, 0);
}

// makeChange(100) is the same as makeChange(100 using 0 quarters),makeChange(100 using 1 quarter) etc,
// which is the same as makeChange(100 using 0q), makeChange(75 using 0q)... + 1 (i.e there's only
// one way with four quarters). This needs to be repeated for each denomination
function makeChangeUtil(amount, denoms, index) {
  // Base case - using only the last denomination (pennies), there's only one way to make n cents
  if (index >= denoms.length - 1) return 1;
  let denomAmount = denoms[index];
  let ways = 0;
  // Recursively call makeChange for each denomination until i * the denomination is equal to n cents
  for (let i = 0; i * denomAmount <= amount; i++) {
    let amountRemaining = amount - i * denomAmount;
    ways += makeChangeUtil(amountRemaining, denoms, index + 1);
  }
  return ways;
}

makeChange(5) === 2 ? console.log('Test passed') : console.log('Test failed');
makeChange(10) === 4 ? console.log('Test passed') : console.log('Test failed');
