function* getSquares(){
  let num = 0;
  while (true){
    num++;
    yield num * num;  // The yield keyword is new and was introduced with ES6.
  }
}

getSquares(); // it returns an iterator.

let generatorIterator = getSquares();
generatorIterator.next();
generatorIterator.next().value;
