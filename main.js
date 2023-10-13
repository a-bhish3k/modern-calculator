let output1, output2;
let numOne, operator, numTwo, operatorSymbol;
let inputKey2;

let inputKey = (value) => {
  output1 = document.querySelector("#output2");
  let input = document.querySelectorAll(".inputBtn");
  let number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  for (let i = 0; i < number.length; i++) {
    if (value == number[i]) {
      output1.value += input[i].value;
    }
  }

  inputKey2 = (value) => {
    output2 = document.querySelector("#output1");
    let input = document.querySelectorAll(".inputOp");
    for (let i = 0; i < 4; i++) {
      if (value == input[i].value) {
        numOne = parseFloat(output1.value);
        output2.innerHTML = numOne + input[i].innerHTML;
        operator = input[i].value;
        operatorSymbol = input[i].innerHTML;
      }
    }
    output1.value = null;
  };

  numTwo = parseFloat(output1.value);

  const enterKey = document.querySelector("#enterKey");
  enterKey.addEventListener("click", function stop() {
    output2.innerHTML = numOne + operatorSymbol + numTwo;
    switch (operator) {
      case "+":
        output1.value = numOne + numTwo;
        break;
      case "-":
        output1.value = numOne - numTwo;
        break;
      case "*":
        output1.value = numOne * numTwo;
        break;
      case "/":
        output1.value = numOne / numTwo;
        break;

      default:
        break;
    }
    enterKey.removeEventListener("click", stop);
  });
};

const allClear = () => {
  output1.value = null;
  output2.innerHTML = null;
};

const clearEntry = () => {
  output1.value = output1.value.slice(0, output1.value.length - 1);
  numTwo = parseFloat(output1.value);
};
