// A staircase has n steps. A child can hop 1, 2 or 3 steps at a time
// Count the number of ways the child can run up the stairs

const countWays = (n) => {
  if (n < 0) return 0;
  if (n === 0) return 1;

  return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
};

console.log(countWays(6));
console.log(countWays(4));
