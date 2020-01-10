'use strict';

const square = n => n * n;

const cube = n => n ** 3;

const average = (a, b) => (a + b) / 2;

// const average = (...nums) => {
//   const length = nums.length;
//   const sum = nums.reduce((acc, current) => acc + current);
//   const result = sum / length;

//   return result;
// };

const calculate = () => {
  const arr = [];

  for (let i = 0; i <= 9; i++) {
    const result = average(square(i), cube(i));

    arr.push(result);
  }

  return arr;
};

module.exports = { square, cube, average, calculate };
