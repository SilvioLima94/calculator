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

let displayValues;

function populate() {
  let displayWrapper = document.querySelector(".display-wrapper");
  let display;
  let btns = document.querySelectorAll("button");
  let fragment = document.createDocumentFragment();

  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      display = document.createElement("div");
      display.className = "display";

      display.innerText = e.target.value;

      if (e.target.value === "clear") {
        displayValues = null;
        console.log(displayValues, "Array is now empty!");
        return document
          .querySelectorAll(".display")
          .forEach((div) => div.parentNode.removeChild(div));
      } else if (
        display.innerText !== "delete" &&
        display.innerText !== "times" &&
        display.innerText !== "divide" &&
        display.innerText !== "minus" &&
        display.innerText !== "plus" &&
        display.innerText !== "equal"
      ) {
        fragment.appendChild(display);
        displayWrapper.appendChild(fragment);
      } else if (display.innerText === "period") {
        displayValues.push(".");
      } else if (e.target.value === "delete") {
        displayValues.pop();
        console.log(displayValues + "after");
      }

      let extractedNumbersArray = Array.from(displayWrapper.outerText)
        .filter((item) => item !== "\n")
        .map((item) => parseInt(item));
      displayValues = extractedNumbersArray;
      console.log(displayValues);
    });
  });
}

console.log(populate());
