function sumFunc(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function returnIterator(arr) {
  let count = 0;
  return function () {
    return arr[count++];
  };
}

function nextIterator(arr) {
  let count = 0;
  return {
    next() {
      return arr[count++];
    },
  };
}

function sumArray(array) {
  const iterator = nextIterator(array);
  let value = iterator.next();
  let sum = 0;
  while (value !== undefined) {
    sum += value;
    value = iterator.next();
  }
  return sum;
}

function setIterator(set) {
  const iterator = set.values();
  return {
    next: function () {
      return iterator.next().value;
    },
  };
}

function indexIterator(array) {
  let index = 0;
  const limit = array.length;
  return {
    next: function () {
      if (index < limit) {
        return [index, array[index++]];
      }
      return undefined;
    },
  };
}

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function () {
  let words = this.str.split(" ");
  let count = 0;
  let limit = words.length;
  return {
    next() {
      if (count < limit) {
        return { value: words[count++], done: false };
      }
      return { value: undefined, done: true };
    },
  };
};

function valueAndPrevIndex(array) {
  let index = 0;
  let statement = "";
  let limit = array.length;
  return {
    sentence() {
      if (index < limit) {
        if (index === 0) {
          statement = `${array[index]} is the first`;
        } else {
          statement = `${array[index]} was found after index ${index - 1}`;
        }
        index++;
        return statement;
      } else {
        return undefined;
      }
    },
  };
}

function* createConversation(text) {
  // use setInterval here, if not running unit tests
  yield setTimeout(() => {
    if (text === "english") {
      console.log("hello world");
    } else {
      console.log("gibberish");
    }
  }, 3000);
}

function waitForVerb(noun) {
  const verb = "sitting";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(noun + " " + verb);
    }, 3000);
  });
}

async function f(noun) {
  const text = await exportFunctions.waitForVerb(noun);
  return text;
}

const exportFunctions = {
  sumFunc,
  returnIterator,
  nextIterator,
  sumArray,
  setIterator,
  indexIterator,
  Words,
  valueAndPrevIndex,
  createConversation,
  f,
  waitForVerb,
};

module.exports = exportFunctions;
