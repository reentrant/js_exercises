const express = require('express');
const app = express();

app.get('/', startApp);
app.get('/drawing', drawSomething);

function startApp(request, response) {
  response.send('Hello World');
}

function drawSomething(request, response){
    response.send('@@@@@@@!!!!!!!!!!');
}

app.listen(3000);
