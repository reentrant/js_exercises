// Static methods
class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  static displayType() {
      console.log(typeof(this));
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

Plane.displayType();
