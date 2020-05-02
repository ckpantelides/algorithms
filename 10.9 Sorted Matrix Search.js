// Given an M x N matrix in which each row and column is sorted in ascending order,
// write a method to find an element

// If we look at the first element in the last row, we can see that the numbers
// to the left are all lower, and the numbers below are all higher. Therefore if the
// searched value is greater than the element at this index, we look at the next row
// If it's smaller, we stay on the same row and look at the next column
function matrixSearch(matrix, value) {
  let column = matrix.length - 1;
  let row = 0;
  while (row < matrix.length && column >= 0) {
    if (value === matrix[row][column]) {
      return [row, column];
    } else if (value < matrix[row][column]) {
      column--;
    } else {
      row++;
    }
  }
  return false;
}

let testMatrix = [
  [0, 1, 2, 3],
  [4, 7, 10, 15],
  [19, 22, 30, 35],
  [36, 40, 45, 50],
];

console.log(matrixSearch(testMatrix, 17));
