
{
  function Tree(size, leaves) {
    console.log("@ function Tree");
    this.size = (typeof size === "undefined")? 10 : size;
    const defaultLeaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null};
    this.leaves = (typeof leaves === "undefined")?  defaultLeaves : leaves;
    this.leafColor;
  }

  Tree.prototype.changeSeason = function(season) {
    console.log("@ function prototype.changeSeason");
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }

  // ES5 subclasses
  function Maple (syrupQty, size, leaves) {
    Tree.call(this, size, leaves);
    this.syrupQty = (typeof syrupQty === "undefined")? 15 : syrupQty;
  }

  Maple.prototype = Object.create(Tree.prototype);
  Maple.prototype.constructor = Maple;

  Maple.prototype.changeSeason = function(season) {
    Tree.prototype.changeSeason.call(this, season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }

  Maple.prototype.gatherSyrup = function() {
    this.syrupQty -= 3;
  }

  const myMaple = new Maple(15, 5);
  myMaple.changeSeason('fall');
  myMaple.gatherSyrup();
  myMaple.changeSeason('spring');
}
