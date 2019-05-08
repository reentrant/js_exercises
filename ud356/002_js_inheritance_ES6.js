/*
 * Subclasses with ES6
 */
 {
   class Tree {
        constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
          this.size = size;
          this.leaves = leaves;
          this.leafColor = null;
          console.log("@ Tree constructor");
        }

          changeSeason(season) {
            this.leafColor = this.leaves[season];
            if (season === 'spring') {
              this.size += 1;
            }
          }
  }

  class Maple extends Tree {
    // In a subclass constructor function, before this can be used,
    // a call to the super class must be made.
          constructor(syrupQty = 15, size, leaves) {
            super(size, leaves); // super is used as a function
            this.syrupQty = syrupQty;
            console.log("@ Maple constructor");
          }

          changeSeason(season) {
            super.changeSeason(season); // super is used as an object!
            if (season === 'spring') {
              this.syrupQty += 1;
            }
          }

          gatherSyrup() {
            this.syrupQty -= 3;
          }
  }

  const myMaple = new Maple(15, 5);
  myMaple.changeSeason('fall');
  myMaple.gatherSyrup();
  myMaple.changeSeason('spring');

 }
