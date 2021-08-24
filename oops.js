function makePerson(name, age) {
  const obj = Object.create(null);
  obj.name = name;
  obj.age = age;
  return obj;
}

const personStore = {
  greet: function () {
    return "hello";
  },
};

function personFromPersonStore(name, age) {
  // add code here
  const obj = Object.create(personStore);
  obj.name = name;
  obj.age = age;
  return obj;
}

const sandra = personFromPersonStore("Sandra", 26);

personStore.introduce = function (name) {
  return `Hi, my name is ${name}`;
};

function PersonConstructor() {
  // add code here
  this.greet = function () {
    return "hello";
  };
}

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

PersonConstructor.prototype.introduce = function () {
  return `Hi, my name is ${this.name}`;
};

class PersonClass {
  constructor(name) {
    // add code here
    this.name = name;
  }

  greet() {
    return "hello";
  }
}

class DeveloperClass extends PersonClass {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  introduce() {
    return `Hello World, my name is ${this.name}`;
  }
}

const userFunctionStore = {
  sayType: function () {
    return `I am a ${this.type}`;
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

const adminFunctionStore = Object.create(userFunctionStore);

adminFunctionStore.sharedPublicMessage = function (text) {
  return text;
};

function adminFactory(name, score) {
  const user = userFactory(name, score);
  Object.setPrototypeOf(user, adminFunctionStore);
  user.type = "Admin";
  return user;
}

class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    return "Woof!";
  }
}

const robotMixin = {
  skin: "metal",
  speak: function () {
    return `I have ${this.legs} legs and am made of ${this.skin}`;
  },
};

module.exports = {
  makePerson,
  personStore,
  personFromPersonStore,
  PersonConstructor,
  personFromConstructor,
  PersonClass,
  DeveloperClass,
  adminFunctionStore,
  userFactory,
  adminFactory,
  Dog,
  robotMixin,
};
