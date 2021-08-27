function addTwo(input) {
  return input + 2;
}

function map(array, callback) {
  const mapped = [];
  for (let i = 0; i < array.length; i++) {
    mapped[i] = callback(array[i]);
  }
  return mapped;
}

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i)) {
      break;
    }
  }
}

function forEachObject(obj, callback) {
  for (var key of Object.keys(obj)) {
    callback(obj[key], key);
  }
}

function reduce(array, callback, initialValue) {
  let state = initialValue;
  forEach(array, (item) => {
    state = callback(state, item);
  });
  return state;
}

function filter(array, callback) {
  const filtered = [];
  forEach(array, (item) => {
    if (callback(item)) {
      filtered.push(item);
    }
  });
  return filtered;
}

function includes(array, value) {
  let state = false;
  forEach(array, (item) => {
    if (!state) {
      state = item === value;
    }
  });
  return state;
}

function intersection(...arrays) {
  const allvalues = reduce(
    arrays,
    (accumulator, array) => {
      return filter(accumulator, (value) => includes(array, value));
    },
    arrays[0],
  );
  const unique = [];
  forEach(allvalues, (value) => {
    if (!unique.includes(value)) {
      unique.push(value);
    }
  });
  return unique;
}

function union(...arrays) {
  const allValues = reduce(
    arrays,
    (accumulator, array) => {
      const copyArray = [...accumulator];
      forEach(array, (item) => {
        if (!includes(copyArray, item)) {
          copyArray.push(item);
        }
      });
      return copyArray;
    },
    [],
  );
  return allValues;
}

function objOfMatches(array1, array2, callback) {
  const obj = {};
  forEach(array1, (item, i) => {
    if (callback(item) === array2[i]) {
      obj[item] = array2[i];
    }
  });
  return obj;
}

function multiMap(arrVals, arrCallbacks) {
  const obj = {};

  forEach(arrVals, (key) => {
    obj[key] = map(arrCallbacks, (fn) => {
      return fn(key);
    });
  });

  return obj;
}

function objectFilter(obj, callback) {
  const newObj = {};
  forEach(Object.keys(obj), (key) => {
    if (obj[key] === callback(key)) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

function majority(array, callback) {
  let oddCount = 0;
  forEach(array, (num) => {
    if (callback(num)) {
      oddCount++;
    }
  });
  return oddCount > array.length / 2;
}

function prioritize(array, callback) {
  const priorityArr = [];
  const lessPriorityArr = [];
  forEach(array, (item) => {
    if (callback(item)) {
      priorityArr.push(item);
    } else {
      lessPriorityArr.push(item);
    }
  });
  return [...priorityArr, ...lessPriorityArr];
}

function countBy(array, callback) {
  const obj = {};
  let key = '';
  forEach(array, (item) => {
    key = callback(item);
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj[key] = ++obj[key];
    } else {
      obj[key] = 1;
    }
  });
  return obj;
}

function groupBy(array, callback) {
  const obj = {};
  let key = '';
  forEach(array, (item) => {
    key = callback(item);
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      obj[key] = [];
    }
    obj[key].push(item);
  });
  return obj;
}

function goodKeys(obj, callback) {
  const keys = [];
  forEachObject(obj, (value, key) => {
    if (callback(value)) {
      keys.push(key);
    }
  });
  return keys;
}

function commutative(fn1, fn2, value) {
  return fn1(fn2(value)) === fn2(fn1(value));
}

function objFilter(obj, callback) {
  const newObj = {};
  forEachObject(obj, (value, key) => {
    if (callback(key) === value) {
      newObj[key] = value;
    }
  });
  return newObj;
}

function rating(arrOfFuncs, value) {
  let trueCount = 0;
  forEach(arrOfFuncs, (fn) => {
    if (fn(value)) {
      trueCount++;
    }
  });
  return (trueCount / arrOfFuncs.length) * 100;
}

function pipe(arrOfFuncs, value) {
  let str = value;
  forEach(arrOfFuncs, (fn) => {
    str = fn(str);
  });
  return str;
}

function highestFunc(objOfFuncs, subject) {
  let highestValue = 0;
  let highestKey = '';
  forEachObject(objOfFuncs, (fn, key) => {
    let currentValue = fn(subject);
    if (highestValue < currentValue) {
      highestValue = currentValue;
      highestKey = key;
    }
  });
  return highestKey;
}

function combineOperations(startVal, arrOfFuncs) {
  let str = startVal;
  forEach(arrOfFuncs, (fn) => {
    str = fn(str);
  });
  return str;
}

function myFunc(array, callback) {
  let index = -1;

  forEach(array, (value, i) => {
    if (index === -1 && callback(value)) {
      index = i;
    }
  });

  return index;
}

function myForEach(array, callback) {
  forEach(array, (value) => {
    callback(value);
  });
}

module.exports = {
  addTwo,
  map,
  forEach,
  forEachObject,
  reduce,
  intersection,
  includes,
  filter,
  union,
  objOfMatches,
  multiMap,
  objectFilter,
  majority,
  prioritize,
  countBy,
  groupBy,
  goodKeys,
  commutative,
  objFilter,
  rating,
  pipe,
  highestFunc,
  combineOperations,
  myFunc,
  every,
  myForEach,
};
