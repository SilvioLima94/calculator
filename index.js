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

let displayValues = [];

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
        return document
          .querySelectorAll(".display")
          .forEach((div) => div.parentNode.removeChild(div));
      }

      fragment.appendChild(display);

      displayWrapper.appendChild(fragment);

      if (e.target.value === "delete") {
        // let item = displayWrapper;
        // let itemsArray = Array.from(item);
        // itemsArray.forEach((div) => div.removeChild(div));
        // let res = itemsArray
        //   .map((item) => item.outerText)
        //   .filter((item) => item !== "delete");
        // displayValues.push(res);
        // console.log(displayValues);

        Array.from(this.element.querySelectorAll(".display")).forEach((item) =>
          item.removeChild(item)
        );
      }
    });
  });
}

console.log(populate());
