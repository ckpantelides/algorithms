// The bounded or 0-1 knapsach problem - each item can be used 0 or 1 times

// There are n items, each with a given weight wi and a value vi, where i = 1, …, n.
// We have a knapsack with a weight capacity of W. Find the maximum value of items we
// can fit in the knapsack i.e. sum of items' weight <= W

function knapsackRecursive(values, weights, MaxW, i) {
  // This checks every possible subset of items whose total weight ≤ W, and
  // gets the set with the maximum value

  // Base/terminal case - if there are no items or no knapsack, return 0
  if (MaxW === 0 || i === 0) {
    return 0;
  }
  // If the items' weight is larger than the knapsack, ignore that item and look at
  // a solution with the preceeding items
  if (weights[i] > MaxW) {
    return knapsackRecursive(values, weights, MaxW, i - 1);
  } else {
    // Each item is either in the optimal subset or not. If included, the total value
    // if the value of the item plus optimal subset for a knapsack with the max weight of
    // W - the last item's weight. We compare this with the result where the last item is excluded
    let included =
      values[i] + knapsackRecursive(values, weights, MaxW - weights[i], i - 1);
    let excluded = knapsackRecursive(values, weights, MaxW, i - 1);
    return Math.max(included, excluded);
  }
}

let testItems = [
  { value: 6, weight: 1 },
  { value: 10, weight: 2 },
  { value: 12, weight: 3 },
];
let testValues = [null, 6, 10, 12];
let testWeight = [null, 1, 2, 3];

console.log(knapsackRecursive(testValues, testWeight, 5, 3));

// Another way of analyzing the subset is by making a two dimensional
// table of optimal values, with the y-axis representing the max number of items
// allowed and the index, and the x-axis representing the value of W

/* Table using testItems above:
   0  1  2  3  4  5
0  0  0  0  0  0  0
1  0  6  6  6  6  6
2  0  6  10 16 16 16
3  0  6  10 16 18 22
*/

// The bottom right cell is the value of the optimal subset

function knapsackDP(items, W) {
  // Create an empty matrix to store the cached values
  let cache = [];
  for (g = 0; g < items.length + 1; g++) {
    cache[g] = [];
    for (h = 0; h < W + 1; h++) {
      cache[g][h] = 0;
    }
  }
  let weights = items.map((item) => item.weight);
  let values = items.map((item) => item.value);
  for (let i = 0; i < items.length + 1; i++) {
    for (let j = 0; j < W + 1; j++) {
      // If there are no items or there's no knapsack capacity, the max value is 0
      if (i === 0 || j === 0) {
        cache[i][j] = 0;
        // As we iterate through the different levels of knapsack capacity, check whether
        // the value will be higher if we include the current item (by adding its value
        // to the cached value for a knapsack with a max weight less than the current item's
        // weight), or if we exclude the current item (by returning the relevant cache)
      } else if (weights[i - 1] <= j) {
        let included = values[i - 1] + cache[i - 1][j - weights[i - 1]];
        let excluded = cache[i - 1][j];
        cache[i][j] = Math.max(included, excluded);
        // If the current item is heavier than the capacity, the max value is the cache
        // of one fewer item with the same knapsack capacity
      } else cache[i][j] = cache[i - 1][j];
    }
  }
  // Return the value from the bottom right of the cache table (this is the max value)
  return cache[items.length][W];
}

console.log(knapsackDP(testItems, 5));
