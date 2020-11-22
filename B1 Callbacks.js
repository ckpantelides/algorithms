function myFunction(val, callback) {
  if (val == 1) {
    callback(true);
  } else {
    callback(false);
  }
}

function myCallBack(bool) {
  if (bool) {
    console.log('do stuff for when value is true');
  } else {
    console.log('do stuff for when value is false');
  }
}

myFunction(0, myCallBack);

// Error-first callback - as used by Node.js
function calculateSquare(number, callback) {
  if (typeof number !== 'number') {
    callback(new Error('Argument not a number'));
    return;
  }
  const result = number * number;
  callback(null, result);
}

function SecondCallback(error, result) {
  if (error) {
    console.log('Caught error: ' + error);
    return;
  }
  console.log(result);
}

calculateSquare(3, SecondCallback);
