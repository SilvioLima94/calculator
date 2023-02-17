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
        currentOperation.outerText
          ? currentOperation.lastChild.remove()
          : lastOperation.outerText
          ? lastOperation.lastChild.remove()
          : "";
      } else if (displayVal === operatorMatch) {
        currentOperator = operatorMatch;
        currentVal = Number(currentOperation.outerText);
        lastOperation.append(currentVal + operator);
        console.log("currentVal: " + currentVal);
        return (currentOperation.innerHTML = "");
      } else if (
        displayVal === "equal" &&
        currentOperation.innerHTML &&
        lastOperation.innerHTML
      ) {
        newVal = Number(currentOperation.outerText);
        console.log("newVal: " + newVal);
        lastOperation.append(newVal);
        if (newVal === 0) {
          alert("Error! Can't divide by 0");
          lastOperation.innerHTML = "";
          return (currentOperation.innerHTML = "");
        }
        result = operate(currentOperator, currentVal, newVal);
        currentOperation.innerHTML = "";
        let final = result % 2 === 0 ? result : result.toFixed(2);
        currentOperation.append(final);
        if (lastOperation.outerText) {
          console.log("lastOperation: " + lastOperation.outerText);
          return (lastOperation.innerHTML = "");
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
