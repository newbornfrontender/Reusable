'use strict';

const range = (start, end) => {
  const nums = [];

  for (let i = start; i <= end; i++) nums.push(i);

  return nums;
};

module.exports = { range };
