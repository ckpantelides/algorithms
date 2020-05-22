// Complete the rotLeft function to rotate an array 'a' to the left by 'd'
function rotLeft(a, d) {
  let rotations = d % a.length;
  let resultArray = [];
  if (rotations === 0) {
    resultArray = a;
  } else {
    let arrayClone = [...a];
    let rightSide = a.splice(0, rotations);
    let leftSide = arrayClone.splice(rotations, a.length);
    resultArray = [...leftSide, ...rightSide];
  }
  return resultArray;
}

let testArr = [1, 2, 3, 4, 5];
console.log(rotLeft(testArr, 4));
