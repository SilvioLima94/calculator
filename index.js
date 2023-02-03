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

let displayWrapper = document.querySelector(".display-wrapper");
//console.log(displayValue);
let display = document.createElement("div");

let btns = document.querySelectorAll("button");
btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.innerText = e.target.value;
    return displayWrapper.appendChild(display);
  });
});

let clear = document.querySelectorAll("button")[0];
let clearDisplay = clear.addEventListener("click", () =>
  clear.getAttribute("0")
);

console.log(clear);
