var string = "";
let operands = "";
// let resultArea, btn0, btn1, btnClear, btnEqual, btnSum, btnSub, butMult, butDiv;
let  resultArea  = document.getElementById('res');
let btn0 = document.getElementById('btn0');
btn0.addEventListener("click", function(){createOperand("0");});
let  btn1 = document.getElementById('btn1');
btn1.addEventListener("click", function(){createOperand("1");});
let btnClear = document.getElementById('btnClr');
btnClear.addEventListener("click", clear);

let btnSum = document.getElementById('btnSum');
btnSum.addEventListener("click", function (){
  saveOperand("+");
});
let btnSub = document.getElementById('btnSub');
btnSub.addEventListener("click", function (){
  saveOperand("-");
});
let btnMult = document.getElementById('btnMul');
btnMult.addEventListener("click", function (){
  saveOperand("*");
});
let btnDiv = document.getElementById('btnDiv');
btnDiv.addEventListener("click", function (){
  saveOperand("/");
});

let btnEqual = document.getElementById('btnEql');
btnEqual.addEventListener("click", function(){
if (string){
  number = parseInt(string, 2);
  operands += number;

  result = eval(operands);
  let binaryNumber = result.toString(2);
  resultArea.innerHTML = binaryNumber;
  operands = "";
  string = binaryNumber;
  console.log(string, typeof(string));
}
});

function saveOperand(operator){
  console.log(string, typeof(string), string.length);
  let number = parseInt(string, 2);
  console.log(number);
  operands += number + operator;
  string = "";
  console.log(operands);
}

function createOperand(char){
  string += char;
  resultArea.innerHTML = string;
}

function clear(){
  resultArea.innerHTML = "_";
  string = "";
  operands = "";
  if (operands){
    console.log(operands);
  }
}
