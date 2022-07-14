const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operator");
const equalEl = document.querySelector("#equal");
const backspace =document.querySelector("#backspace");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
     } //else if (display.innerText == "" && item.id == "equal") {
    //   display.innerText = "Empty!";
    //   setTimeout(() => (display.innerText = ""), 2000);
    // } 
    else {
      display.innerText += item.id;
    }
  };
});

// let btnMode = document.querySelector('.mode');
// btnMode.addEventListener ('click', () => {
//   btnMode.innerText = 'DarkMode';
// });

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  // themeToggleBtn.innerText="DarkMode";
  // themeToggleBtn.innerText="LightMode";
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;;
};

// keyboard events

// window.addEventListener("keydown", (e) => {
//   if (
//     e.key === "0" ||
//     e.key === "1" ||
//     e.key === "2" ||
//     e.key === "3" ||
//     e.key === "4" ||
//     e.key === "5" ||
//     e.key === "6" ||
//     e.key === "7" ||
//     e.key === "8" ||
//     e.key === "9" ||
//     e.key === "."
//   ) {
//     clickButtonEl(e.key);
//     // console.log(e.key)
//   } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
//     clickOperation(e.key);
//   } else if (e.key === "*") {
//     clickOperation("x");
//     // console.log(e.key)
//   } else if (e.key == "Enter" || e.key === "=") {
//     clickEqual();
//   }
//   // console.log(e.key)
// });
// function clickButtonEl(key) {
//   numbersEl.forEach((button) => {
//     if (button.innerText === key) {
//       button.click();
//     }
//   });
// }
// function clickOperation(key) {
//   operationEl.forEach((operator) => {
//     if (operator.innerText === key) {
//       operator.click();
//     }
//   });
// }
// function clickEqual() {
//   equalEl.click();
// }

