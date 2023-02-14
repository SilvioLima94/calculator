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
  let bottomScreen = document.querySelector("#bottom-screen");
  let display, current, result, newNum, currentOperator;
  let operatorArray = ["divide", "multiply", "subtract", "add"];

  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      display = e.target.value;

      let operatorMatch = operatorArray.filter((op) => op === display).join("");
      console.log("operatorMatch: " + operatorMatch);

      let operatorSign =
        operatorMatch === "divide"
          ? " / "
          : operatorMatch === "multiply"
          ? " * "
          : operatorMatch === "subtract"
          ? " - "
          : operatorMatch === "add"
          ? " + "
          : "";
      console.log(operatorSign);

      if (display === "clear") {
        lastOperation.innerHTML = "";
        return (currentOperation.innerHTML = "");
      } else if (
        display !== "delete" &&
        display !== "multiply" &&
        display !== "divide" &&
        display !== "subtract" &&
        display !== "add" &&
        display !== "equal"
      ) {
        return currentOperation.append(e.target.value);
      } else if (display === "delete") {
        // const removeElement = Array.from(currentOperation);
        // console.log(removeElement);
      } else if (display === operatorMatch) {
        currentOperator = operatorMatch;
        current = Number(currentOperation.outerText);
        console.log(typeof current);
        console.log("current: " + current);
        lastOperation.append(current + operatorSign);
        bottomScreen.innerHTML = "";
      } else if (display === "equal") {
        //console.log("equal...");
        newNum = Number(currentOperation.outerText);
        console.log("newNum");
        console.log(newNum);
        lastOperation.append(newNum);
        console.log(operatorMatch);
        result = operate(currentOperator, current, newNum);
        console.log("result: " + result);
        currentOperation.innerHTML = "";
        currentOperation.append(result.toFixed(3));
      } else {
        return;
      }
    });
  });
}

console.log(populate());
