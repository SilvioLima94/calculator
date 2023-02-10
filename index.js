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

function operate(operator, num1, num2) {
  if (operator === "addition") {
    return add(num1, num2);
  } else if (operator === "subtract") {
    return subtract(num1, num2);
  } else if (operator === "multiply") {
    return multiply(num1, num2);
  } else if (operator === "divide") {
    return divide(num1, num2);
  } else {
    return;
  }
}

function populate() {
  let currentOperation = document.querySelector(".current-operation");
  let display;
  let btns = document.querySelectorAll("button");
  let fragment = document.createDocumentFragment();
  let lastOperation = document.querySelector(".last-operation");
  let result,
    val1,
    val2 = null;

  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      display = document.createElement("div");
      display.className = "display";
      display.innerText = e.target.value;

      if (display.innerText === "clear") {
        let removeEl = lastOperation;
        removeEl.removeChild(removeEl.lastElementChild);
        // val1 = null;
        // console.log(val1, "Array is now empty!");
        return document
          .querySelectorAll(".display")
          .forEach((div) => div.parentNode.removeChild(div));
      } else if (
        display.innerText !== "delete" &&
        display.innerText !== "multiply" &&
        display.innerText !== "divide" &&
        display.innerText !== "subtract" &&
        display.innerText !== "add" &&
        display.innerText !== "equal"
      ) {
        fragment.appendChild(display);
        return currentOperation.appendChild(fragment);
      } else if (display.innerText === "delete") {
        const removeElement = currentOperation;
        return removeElement.removeChild(removeElement.lastElementChild);
      } else {
        console.log(currentOperation);
        let extractedNumbersArray = Array.from(currentOperation.outerText)
          .filter((item) => item !== "\n")
          .map((item) => item);
        console.log(extractedNumbersArray);
        val1 = parseFloat(extractedNumbersArray.map((num) => num).join(""));

        let operator = display.innerText;
        if (operator === "multiply") {
          let lastResult = document.createElement("div");
          lastResult.innerText = val1 + " x";
          lastResult.className = "last-value";
          fragment.appendChild(lastResult);
          lastOperation.appendChild(fragment);

          //   if (currentOperation.hasChildNodes()) {
          //     //console.log(currentOperation);
          //     const removeEl = display;
          //     removeEl.remove();
          //   }
          //   if (e.target.value) {
          //     let newDiv = document.createElement("div");
          //     fragment.appendChild(newDiv);
          //     currentOperation.appendChild(fragment);

          //     //console.log(currentOperation);
          //   }
          if (currentOperation.hasChildNodes) {
            currentOperation.removeChild(currentOperation.children[0]);
          }
          //val2 = e.target.value;
          //console.log("val2 " + val2);
        }

        result = operate(operator, val1, 10);
        console.log(result);

        // if (display.innerText === "equal") {

        // }
      }

      //console.log(val1);
    });
  });
}

console.log(populate());
