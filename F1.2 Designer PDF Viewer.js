// A PDF viewer can highlight words. Calculate the area of a highlighted word - each word
// is 1mm wide. The height of each letter is in the array h

function designerPdfViewer(h, word) {
  let letterHeights = [];
  for (let i = 0; i < word.length; i++) {
    let letterIndex = word.charCodeAt(i) - 97;
    let height = h[letterIndex];
    letterHeights.push(height);
  }
  return word.length * Math.max(...letterHeights);
}

let testArr = [
  1,
  3,
  1,
  3,
  1,
  4,
  1,
  3,
  2,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  7,
];
let testWord = 'zaba';

console.log(designerPdfViewer(testArr, testWord));
