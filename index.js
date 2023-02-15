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
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator === "addition" || operator === "add") {
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
  let btns = document.querySelectorAll("button");
  let currentOperation = document.querySelector(".current-operation");
  let lastOperation = document.querySelector(".last-operation");
  let displayVal, currentVal, newVal, result, currentOperator;
  let operatorionArray = ["divide", "multiply", "subtract", "add"];

  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      displayVal = e.target.value;

      let operatorMatch = operatorionArray
        .filter((op) => op === displayVal)
        .join("");

      let operator =
        operatorMatch === "divide"
          ? " ÷ "
          : operatorMatch === "multiply"
          ? " × "
          : operatorMatch === "subtract"
          ? " - "
          : operatorMatch === "add"
          ? " + "
          : "";

      if (displayVal === "clear") {
        lastOperation.innerHTML = "";
        return (currentOperation.innerHTML = "");
      } else if (displayVal === "delete") {
        const removeElement = Array.from(currentOperation.outerText);
        let result = removeElement.filter(
          (num) => num === currentOperation.outerText
        );
        console.log(result);
      } else if (displayVal === operatorMatch) {
        currentOperator = operatorMatch;
        currentVal = Number(currentOperation.outerText);
        if (currentVal === 0) return;
        lastOperation.append(currentVal + operator);
        return (currentOperation.innerHTML = "");
      } else if (
        displayVal === "equal" &&
        currentOperation.innerHTML !== "" &&
        lastOperation.innerHTML !== ""
      ) {
        newVal = Number(currentOperation.outerText);
        lastOperation.append(newVal);
        result = operate(currentOperator, currentVal, newVal);
        console.log("result: " + result);
        currentOperation.innerHTML = "";
        let final = result % 2 === 0 ? result : result.toFixed(2);
        console.log("Final: " + final);
        currentOperation.append(final);
        if (lastOperation.outerText) {
          console.log("lastOperation: " + lastOperation.outerText);
          lastOperation.innerHTML = "";
          //return lastOperation.append(final);
        } else {
          if (displayVal) {
          }
        }
      } else {
        displayVal !== "delete" &&
          displayVal !== "multiply" &&
          displayVal !== "divide" &&
          displayVal !== "subtract" &&
          displayVal !== "add" &&
          displayVal !== "equal";
        {
          displayVal === "." && currentOperation.outerText === ""
            ? currentOperation.append("0.")
            : displayVal !== "." && displayVal !== "equal"
            ? currentOperation.append(e.target.value)
            : "";
        }
      }
    });
  });
}

console.log(populate());
