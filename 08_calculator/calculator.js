const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArray) {
  let x = numArray.reduce(function (prev, curr) {
    return curr + prev;
  }, 0);
  return x;
};

const multiply = function (numArray) {
  let x = numArray.reduce(function (prev, curr) {
    return curr * prev;
  }, 1);
  return x;
};

const power = function (num, pow) {
  return num ** pow;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
