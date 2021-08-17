function makePerson(name, age) {
  const obj = Object.create(null);
  obj.name = name;
  obj.age = age;
  return obj;
}

const personStore = {
  greet: function () {
    console.log("hello");
  },
};

module.exports = {
  makePerson,
  personStore,
};
