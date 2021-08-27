function sayHello() {
  setTimeout(() => {
    console.log('Hello!');
  }, 3000);
}

function promise() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('Resolved!!!');
    }, 1000);
  });
}
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Resolved!!!");
//   }, 1000);
// });

function promise2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject('Rejected!!!');
    }, 1000);
  });
}

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
}

function secondPromise() {
  return Promise.resolve('Second!!!');
}

function firstPromise(promise) {
  return Promise.resolve(promise);
}

const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: 'index out of range' });
    }
  });
};

function getAllData() {
  // CODE GOES HERE
  return Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]);
}

function timerPromiser(time, text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function getAllTimer() {
  return Promise.all([
    timerPromiser(3000, 'one'),
    timerPromiser(1000, 'two'),
    timerPromiser(2000, 'three'),
  ]);
}

module.exports = {
  sayHello,
  promise,
  promise2,
  delay,
  secondPromise,
  firstPromise,
  getAllData,
  getAllTimer,
};
