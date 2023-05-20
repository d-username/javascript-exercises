const repeatString = function (string, num) {
  let solution = '';

  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      solution += string;
    }
  } else {
    solution = 'ERROR';
  }

  return solution;
};

// Do not edit below this line
module.exports = repeatString;
