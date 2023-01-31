function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 * num2;
}

function operate(op, num1, num2) {
  if (op === "add") {
    add(num1, num2);
  } else if (op === "subtract") {
    subtract(num1, num2);
  } else if (op === "multiply") {
    multiply(num1, num2);
  } else if (op === "divide") {
    divide(num1, num2);
  } else {
    return;
  }
}

let displayValue = null;
