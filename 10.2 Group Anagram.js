// Sort an array of strings so all anagrams are next to each other

// If all the characters in the strings are sorted, the anagrams will look the same
const groupedAnagrams = (array) => {
  let hash = {};
  // Each string is split into an array and sorted. If the hash table has a key that equals
  // the sorted array, the string is pushed into the values array of that key. Else a new hash[key]
  // is created with the string stored as the first element of an array (this is important so we can push
  // other values to it)
  array.forEach((string) => {
    let key = string.split('').sort();
    hash[key] ? hash[key].push(string) : (hash[key] = [string]);
  });
  // We can create an array of nested grouped anagram arrays usings Object.values
  const valuesArray = Object.values(hash);
  // This can be concatenated to a single array using concat.apply
  const result = Array.prototype.concat.apply([], valuesArray);
  return result;
};

let testArray = ['cat', 'bat', 'bta', 'cta', 'atb'];
console.log(groupedAnagrams(testArray));
