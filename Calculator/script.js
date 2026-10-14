var display = document.querySelector("#displayValue");
var noofbuttons = document.querySelectorAll(".button").length;
var firstNumber = "";
var operator = "";
var secondNumber = "";
var waitingforSecondNumber = false;
var result = null;
var clickSound = new Audio("music.mp3");
for (let i = 0; i < noofbuttons; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", function (event) {
      var buttonClicked = event.currentTarget.innerText;
      clickSound.currentTime = 0;
      clickSound.volume = 1;
      clickSound.play();
      if (isNaN(buttonClicked) === false) {
        if (waitingforSecondNumber == false) {
          if (firstNumber.length < 12) {
            firstNumber = firstNumber + buttonClicked;
            display.textContent = firstNumber;
          }
        } else {
          if (secondNumber.length < 12) {
            secondNumber = secondNumber + buttonClicked;
            display.textContent = secondNumber;
          }
        }
      }
      if (
        buttonClicked == "+" ||
        buttonClicked == "-" ||
        buttonClicked == "×" ||
        buttonClicked == "/"
      ) {
        operator = buttonClicked;
        waitingforSecondNumber = true;
      }

      if (buttonClicked == "=") {
        if (operator != "") {
          if (firstNumber == "" || secondNumber == "") {
            display.textContent = "Error";
          } else {
            firstNumber = Number(firstNumber);
            secondNumber = Number(secondNumber);
            if (operator == "+") {
              result = firstNumber + secondNumber;
            } else if (operator == "-") {
              result = firstNumber - secondNumber;
            } else if (operator == "×") {
              result = firstNumber * secondNumber;
            } else if (operator == "/") {
              if (secondNumber == 0) {
                result = "Error: You Can't Divide By Zero";
              } else {
                result = firstNumber / secondNumber;
              }
            }
            display.textContent = result;
            firstNumber = result;
            secondNumber = "";
            operator = "";
            waitingforSecondNumber = false;
          }
        }
      }
      if (buttonClicked == "C") {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        waitingforSecondNumber = false;
        result = null;
        display.textContent = 0;
      }

      if (buttonClicked == "%") {
        firstNumber = Number(firstNumber);
        result = firstNumber / 100;
        display.textContent = result;
        firstNumber = result;
      }
      if (buttonClicked == "!") {
        result = 1;
        if (firstNumber == "") {
          display.textContent = "Error";
        } else {
          firstNumber = Number(firstNumber);
          if (firstNumber < 0) {
            display.textContent = "Error";
          } else {
            for (var i = 1; i <= firstNumber; i++) {
              result = i * result;
            }
            display.textContent = result;
            firstNumber = result;
          }
        }
      }
      if (buttonClicked == "log2") {
        if (firstNumber > 0) {
          result = Math.log2(firstNumber);
          display.textContent = result;
          firstNumber = result;
        } else {
          display.textContent = "Error";
        }
      }
      if (buttonClicked == "e") {
        result = Math.E;
        display.textContent = result;
        firstNumber = result;
      }
    });
}
