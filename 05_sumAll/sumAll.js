const sumAll = function (arg1, arg2) {
  let sum = 0;
  if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
    return 'ERROR';
  } else {
    if (arg1 > arg2) {
      for (let i = arg1; i >= arg2; i--) {
        sum += i;
      }
    } else {
      for (let i = arg1; i <= arg2; i++) {
        sum += i;
      }
    }
  }

  if (sum < 0) {
    return 'ERROR';
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
