function countdown(x) {
  if (x > 0) {
    //console.log(x);
    countdown(x - 1);
  }
  return;
}

function sum(array, total = 0) {
  if (array.length === 0) return total;
  const newTotal = total + array[0];
  array.shift();
  return sum(array, newTotal);
}

function palindrome(string) {
  string = string.replace(/\W/gi, "").toLowerCase();
  if (string.length <= 1) return true;
  if (string[0] !== string[string.length - 1]) return false;
  return palindrome(string.slice(1, -1));
}

function isPrime(num, base = 2) {
  if (num < 2) return false;
  if (base === num) return true;
  if (num % base === 0) return false;
  return isPrime(num, base + 1);
}

function pathFinder(obj, arr) {
  if (obj === undefined) return undefined;
  if (typeof obj !== "object") return obj;
  const newArr = [...arr];
  const newObj = obj[newArr[0]];
  newArr.shift();
  return pathFinder(newObj, newArr);
}

//refactor pending
function flattenRecursively(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      tempArr = [...tempArr, ...flattenRecursively(arr[i])];
    } else {
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
}

function findInOrderedSet(nums, value) {
  if (nums.length === 0) return false;
  if (nums.length === 1) return nums[0] === value;
  const middleIndex = Math.floor(nums.length / 2);
  if (value <= nums[middleIndex]) {
    if (value === nums[middleIndex]) return true;
    return findInOrderedSet(nums.slice(0, middleIndex), value);
  } else {
    return findInOrderedSet(nums.slice(middleIndex + 1, nums.length), value);
  }
}

//Challenge 8
function countWaysToReachNthStair(n) {
  if (n <= 2) return n;
  return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2);
}

function getPermutations(arr) {
  return arr;
}

//Challenge 10
function getRangeBetween(x, y) {
  const start = x + 1;
  if (start >= y) return [];
  return [start, ...getRangeBetween(start, y)];
}

module.exports = {
  countdown,
  sum,
  palindrome,
  isPrime,
  pathFinder,
  flattenRecursively,
  findInOrderedSet,
  countWaysToReachNthStair,
  getPermutations,
  getRangeBetween,
};
