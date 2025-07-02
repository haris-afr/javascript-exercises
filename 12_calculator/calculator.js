const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, index) => sum + index, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, index) => product * index, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a == 1 || a == 0){
    return 1;
  }
  else if (a < 0){
    return NaN;
  }
  else{
	  return a * factorial(a - 1);
  }

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
