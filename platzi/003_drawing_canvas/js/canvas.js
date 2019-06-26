class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Drawing {
    constructor(color){
        let element = document.getElementById('canvas');
        this.height = element.height;
        this.width = element.width;
        this.lienzo = element.getContext('2d');
        this.lienzo.strokeStyle = color;
        console.log(this.lienzo);
    }

    drawMesh(offset){
        let origin = new Point(0, 0);
        console.log(origin);
        let end = new Point(offset, this.height);
        console.log(end);
        while (end.x <= this.width && origin.y <= this.height){
            this.drawLine(origin.x, origin.y, end.x, end.y);
            origin.y += offset;
            end.x += offset;
        }
        // Now let's draw borders:
        this.lineWidth = 2;
        this.lienzo.strokeStyle = 'blue';
        this.drawLine(1, 1, 1, this.height -1);
        this.drawLine(1, this.height -1, this.width -1, this.height -1);
    }

    drawLine(x1, y1, x2, y2){
        this.lienzo.beginPath();
        this.lienzo.moveTo(x1, y1);
        this.lienzo.lineTo(x2, y2);
        this.lienzo.stroke();
        this.lienzo.closePath();
    }
}

function drawByClick(){
    let pixelSpaces = Number(textElement.value);
    drawing.drawMesh(pixelSpaces);
    if (mesh == false){
        var label = document.createElement('p');

            label.innerHTML = '<p> Here is your drawing!!! </p>';
            label.id = 'end';
            document.body.appendChild(label);
        mesh = true;
    }
}
var mesh = false;
let colors = ['blue', 'yellow', 'brown', 'orange'];
let colorIndex = 0;
let drawing = new Drawing(color='green');
var textElement = document.getElementById('textbox');
var buttonElement = document.getElementById('button');
buttonElement.addEventListener('click', drawByClick);
let canvas = document.getElementById('canvas');
canvas.onmouseover = changeColor;

function changeColor(){
    if (mesh){
        drawing.lienzo.strokeStyle = colors[colorIndex++ % colors.length];
        drawByClick();
    }
}
