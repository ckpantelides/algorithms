// Sunny and Johnny pool their money and buy ice-cream. They never buy the same flavour
// and they spend all their money. Given an array 'arr' of prices with a 1-based index,
// and 'm' their pooled money, return the indices of the two ice-creams they can buy

// Nested loops could have been used let i = 0, let j=i+1 ...I've used Hash Maps for faster lookup
function icecreamParlor(m, arr) {
  const flavourMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    // if the map has a key equal to their pooled money less the ith item in the array, return it
    // with i + 1, (as the flavour array is 1-index based)
    if (flavourMap.has(m - arr[i])) {
      return [flavourMap.get(m - arr[i]), i + 1];
    } else {
      // else add the price to the map, with a value of i+1
      flavourMap.set(arr[i], i + 1);
    }
  }
}

console.log(icecreamParlor(4, [2, 2, 4, 3]));
