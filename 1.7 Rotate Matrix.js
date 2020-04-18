const rotate90 = (matrix) => {
  const n = matrix.length;
  // Iterate through the matrix. We only need n/2 as once we've looked at a quarter
  // of the matrix all the elements will have been swapped
  for (r = 0; r < n / 2; r++) {
    for (let c = r; c < n - r - 1; c++) {
      // The elements are swapped in place four ways in place i.e. topleft is topright,
      // topright is bottom right etc The row and the column coordinates are reversed.
      // The new column coordinate is Math.abs(the matrix length less the
      // previous row coordinate) i.e. n-r-1
      let temp = matrix[r][c];
      matrix[r][c] = matrix[n - c - 1][r];
      matrix[n - c - 1][r] = matrix[n - r - 1][n - c - 1];
      matrix[n - r - 1][n - c - 1] = matrix[c][n - r - 1];
      matrix[c][n - r - 1] = temp;
    }
  }
  return matrix;
};

const matrix = (length) => {
  let result = [];
  for (let r = 0; r < length; r++) {
    result[r] = [];
    for (let c = 0; c < length; c++) {
      result[r][c] = [r + 1 + '-' + c];
    }
  }
  return result;
};
console.log(matrix(5));
console.log(rotate90(matrix(5)));
