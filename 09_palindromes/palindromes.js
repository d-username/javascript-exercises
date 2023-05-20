const palindromes = function (string) {
  let lcase = string.toLowerCase();
  let noPunc = lcase.replace(/[^a-z]/g, '');
  let reversed = noPunc.split('').reverse().join('');
  return reversed === noPunc;
};

// Do not edit below this line
module.exports = palindromes;
