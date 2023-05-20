const fibonacci = function (nth) {
  if (nth < 1) {
    return 'OOPS';
  }

  let a = 0;
  let b = 1;
  let fib;

  for (let i = 0; i < nth; i++) {
    fib = b;
    let temp = a;
    a = b;
    b = temp + b;
  }

  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
