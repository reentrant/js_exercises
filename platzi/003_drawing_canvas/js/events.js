class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Drawing {
    constructor(color='blue', lineWidth=1){
        let element = document.getElementById('canvas');
        this.height = element.height;
        this.width = element.width;
        this.lienzo = element.getContext('2d');
        this.lienzo.strokeStyle = color;
        this.lienzo.lineWidth = lineWidth;
        console.log(this.lienzo);
        console.log(`parameters: ${color} ${lineWidth}!`);
        console.log(`parameters: ${this.lienzo.strokeStyle} ${this.lienzo.lineWidth}!`);
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


var keys = {
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
};

let startX = 150;
let startY = 150;
function drawShape(theEvent){
    let pixels = 10;
    let endX, endY;
    switch (theEvent.key){
        case keys.UP:
            endX = startX;
            endY = startY - pixels;
            break;
        case keys.DOWN:
            endX = startX;
            endY = startY + pixels;
            break;
        case keys.LEFT:
            endX = startX - pixels;
            endY = startY;
            break;
        case keys.RIGHT:
            endX = startX + pixels;
            endY = startY;
            break;
        default:
            console.log("key Pressed:", theEvent.key);
            break;
    }
    drawing.drawLine(startX, startY, endX, endY);
    startX = endX;
    startY = endY;
}

document.addEventListener('keyup', drawShape);
let drawing = new Drawing(color='green', lineWidth=5);
