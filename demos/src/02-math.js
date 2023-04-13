function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function promedio(numberArray) {
  let a = 0;
  numberArray.forEach((element) => {
    a += element;
  });
  a /= numberArray.length;
  return a;
}

module.exports = {
  sum,
  multiply,
  divide,
  promedio,
};
