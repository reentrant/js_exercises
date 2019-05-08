
{
  // "class" with ES5 code:
  function Rectangle(w, h){
    this.w = w;
    this.h = h;
  }
  // methods "inherited" by all instances
  Rectangle.prototype.area = function () {
    return this.w * this.h;
  }

  const rec = new Rectangle(5, 8);
  console.log(rec.area());
}

// ES6 classes
{
  class Rectangle {
      constructor(w, h) {
          this.w = w;
          this.h = h;
      }

      area(){
        return this.w * this.h;
      }
  }
  // Class is just a function
  console.log(typeof(Rectangle));
  const rec = new Rectangle(3, 4);
  console.log(rec.area());
}
