var clickMeButton = document.createElement('button');

    clickMeButton.innerHTML = '0';
    clickMeButton.id = 'btn';
    clickMeButton.className = 'buttonClass';
    document.body.appendChild(clickMeButton);

let jButton = document.getElementById('btn');
let counter = 0;
    jButton.addEventListener("click", function() {
        counter++;
        jButton.innerHTML = counter.toString();});
