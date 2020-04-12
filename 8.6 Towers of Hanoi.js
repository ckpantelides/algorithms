// There are three towers. The first tower has n disks of decreasing size (i.e. the top
// disk is the smallest). Move the disks to the last tower. No disk can be on-top of a disk
// smaller than it
const moveDisks = (n, origin, buffer, destination) => {
  // Terminal & base case - if there are no disks, there is nothing to move
  if (n <= 0) return;
  // Using the recursive assumption, I'll assume function works on a smaller input. To solve for
  // n-1, all but the largest disks must be on the buffer peg - using the destination peg as a buffer to do this
  moveDisks(n - 1, origin, destination, buffer);
  // The largest disk must then be moved to the destination peg
  destination.push(origin.pop());
  // The remaining pegs should then be moved from the buffer to the destination, using the
  // origin peg as the new buffer
  moveDisks(n - 1, buffer, origin, destination);
};

let towerA = [5, 4, 3, 2, 1];
let towerB = [];
let towerC = [];
moveDisks(5, towerA, towerB, towerC);

// TEST
towerC[0] === 5 && towerC[4] === 1 && towerA[0] === undefined
  ? console.log('Test passed')
  : console.log('Test failed');
