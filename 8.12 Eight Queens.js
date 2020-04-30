// Print all the ways of arranging eight queens on a chess board so that none share the
// same row, column or diagonal

// The ways to arrange 8 queens = ways to arrange 8 queens with a queen at (7,0) + (7,1) etc

const SIZE = 8;

const queensStarter = () => {
  let columns = {};
  let results = [];
  return placeQueens(0, columns, results);
};

const placeQueens = (row, columns, results) => {
  // Base/terminal case. The rows are 0 to 7. If row 8 is reached, 8 queens have been successfully
  // placed, therefore we push the arrangement to the result array
  if (row === SIZE) {
    // 'Columns' holds the succesful arrangement of 8 queens. As objects are reference values
    // a clone of columns needs to be pushed to the results array, otherwise the result will
    // point to 92 versions of the final arrangement
    let columnsClone = { ...columns };
    results.push(columnsClone);
  } else {
    // Each row can hold one queen. We know the current row doesn't hold a queen as we're
    // iterating through them. We therefore need to check each column one by one
    for (let col = 0; col < SIZE; col++) {
      if (checkValid(columns, row, col)) {
        columns[row] = col; // If there's no conflict, place the queen and recurse with the next row
        placeQueens(row + 1, columns, results);
      }
    }
  }
  return results;
};

// This checks whether a placement is valid. We don't need to check the rows as placeQueen
// only attempts to place one queen at a time, and we know each subsequent row is empty
const checkValid = (columns, row1, column1) => {
  for (let row2 = 0; row2 < row1; row2++) {
    // We iterate through each previous queen placement, to see if their column matches
    // the column we plan to use
    let column2 = columns[row2];
    if (column1 === column2) {
      return false;
    }
    // Next we check the diagonals of each previous placement. If the distance between the columns
    // is equal to the distance between the rows, they're in the same diagonal (i.e. if our planned
    // placement is the opposite diagonal in a square with any other queen)
    let columnDistance = Math.abs(column2 - column1);
    // Math.absolute is needed for columns as the queens could be the left or right (therefore
    // the distance could be negative). With rows we're traversing from the bottom (row 0) up,
    // therefore there will be no negative numbers
    let rowDistance = row1 - row2;
    if (columnDistance === rowDistance) {
      return false;
    }
  }
  return true;
};

//console.log(queensStarter());
let testResult = queensStarter();
testResult.length === 92
  ? console.log('Test passed')
  : console.log('Test failed');
