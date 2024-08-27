// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   subtract(a, b) {
//     return a - b;
//   }
//   multitply(a, b) {
//     return a * b;
//   }
//   divide(a, b) {
//     return a / b;
//   }
// }

// module.exports = Calculator;

module.exports = class {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multitply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
};
