let buttons = ['1', '2', '3', '6', '9', '8', '7', '4']

function rotateElements(){
  let index;

  for(let i = 1; i < 10; i++){
      let id = 'btn' + i.toString();
      if (i != 5){
        let button = document.getElementById(id);
        index = buttons.indexOf(button.innerHTML);
        button.innerHTML = index == 0 ? buttons[buttons.length - 1] : buttons[index - 1];
      }
  }
}


let jButton = document.getElementById('btn5');
    jButton.addEventListener("click", function() {
        rotateElements();
        });
