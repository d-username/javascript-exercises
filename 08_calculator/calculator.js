const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let initialValue = 0;
  return array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
};

const multiply = function (array) {
  return array.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
};

const power = function (num1, num2) {
  let count = 1;

  for (let i = 0; i < num2; i++) {
    count *= num1;
  }

  return count;
};

const factorial = function (num) {
  let count = 1;

  for (let i = 1; i <= num; i++) {
    count *= i;
  }

  return count;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
