// First and second set of challenges are already solved in
// callbacks.js and closures.js. Please check those files.
// Challenge 1
// Challenge 1
const functionValidator = (funcArr, input, output) => {
  return funcArr.reduce((acc, curr) => {
    if (curr(input) === output) acc.push(curr);
    return acc;
  }, []);
};

// Challenge 2
const allClear = (funcArr, value) => {
  return funcArr.reduce((acc, curr) => {
    if (acc) return curr(value);
    return acc;
  }, true);
};

// Challenge 3
const numSelectString = (numArr) => {
  return numArr
    .sort((a, b) => a - b)
    .filter((el) => el % 2 === 1)
    .reduce((acc, curr) => {
      return acc + ', ' + curr;
    });
};

// Challenge 4
const movieSelector = (moviesArr) => {
  return moviesArr
    .filter((movie) => movie.score > 5)
    .map((el) => {
      el.title = el.title.toUpperCase();
      return el;
    })
    .reduce((acc, curr) => {
      acc.push(curr.title);
      return acc;
    }, []);
};

// Challenge 5
const curriedAddThreeNums = (num1) => (num2) => (num3) => num1 + num2 + num3;

const curriedAddTwoNumsToFive = curriedAddThreeNums(5);

module.exports = {
  functionValidator,
  allClear,
  numSelectString,
  movieSelector,
  curriedAddThreeNums,
  curriedAddTwoNumsToFive,
};
