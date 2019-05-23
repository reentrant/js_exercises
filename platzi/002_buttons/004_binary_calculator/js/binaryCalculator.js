parser = function(inputString){
  const DEBUG = true;
  let binNumber = '', expression = '';
  let stack = [];
  let number, result;
  let division = false;
  for(let c of inputString){

    if (c == '1' || c == '0'){
        binNumber += c;
    }
    else {
      number = parseInt(binNumber, 2);
      expression += number.toString();
      if (DEBUG)
        console.log(expression);
      binNumber = '';
      switch(c){
        case '+':
        case '-':
        case '*':
          expression += c;
          break;
        case '/':
          division = true;
          expression = 'Math.floor(' + expression + c;
          break;
        case '=':
          if (division) expression += ')';
          result = eval(expression);
          expression = '';
          division = false;
          break;
        default:
        break;
      } // switch
    }  // else
  }  // for
  return result;
}
