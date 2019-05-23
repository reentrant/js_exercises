// Example: polyfill for the method find()

"Avril".find("A");

if (!String.prototype.find){
  String.prototype.find = function (searchString, position=0){
    return this.indexOf(searchString, position);
  };
}

"Avril".find("A");
