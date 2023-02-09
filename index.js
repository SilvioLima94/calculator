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

      if (display.innerText === "clear") {
        displayValues = null;
        console.log(displayValues, "Array is now empty!");
        return document
          .querySelectorAll(".display")
          .forEach((div) => div.parentNode.removeChild(div));
      } else if (
        display.innerText !== "delete" &&
        display.innerText !== "multiply" &&
        display.innerText !== "divide" &&
        display.innerText !== "subtract" &&
        display.innerText !== "addition" &&
        display.innerText !== "equal"
      ) {
        fragment.appendChild(display);
        return displayWrapper.appendChild(fragment);
      } else if (display.innerText === ".") {
        let strArr = displayValues.map(String);
        // strArr.push(".");
        // let newArr = strArr;
        console.log(strArr);
      } else if (display.innerText === "delete") {
        const el = displayWrapper;
        return el.removeChild(el.lastElementChild);
      }

      let extractedNumbersArray = Array.from(displayWrapper.outerText)
        .filter((item) => item !== "\n")
        .map((item) => parseFloat(item));
      displayValues = extractedNumbersArray;
      //displayValues = displayWrapper;
      console.log(displayValues);
    });
  });
}

console.log(populate());
