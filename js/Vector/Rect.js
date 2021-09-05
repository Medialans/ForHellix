
export class Rect {
    /**Aflam Unde sa apasat loc in map*/
    static FixLocationOnVector(loc = Vector2, map = Vector2) {
      return new Vector2(
        Math.floor(loc.x / map.x),
        Math.floor(loc.y / map.y)
      )
    }
 
  constructor(...args) {
    this.Location = new Vector2(0,0);
    this.Size = new Vector2(0,0);
    if (typeof args[0] == "Object") {
      this.Location = args[0];
      this.Size = args[1];
    }
    else {
        this.Location = new Vector2(
            args[0]?args[0]:0,
            args[1]?args[1]:0)
        this.Size = new Vector2(
            args[2] ? args[2] : 0,
            args[3] ? args[3] : 0)
    }
  }
  //geter
  get x() { return this.Location.x; }
  set x(value){this.Location.x = value}
  get y() { return this.Location.y; }
  set y(value){this.Location.y = value}
  get w() { return this.Size.x; }
  set w(value){this.Size.x = value}
  get h() { return this.Size.y; }
  set h(value){this.Size.y = value}
  
  /** pozitia + marimea */
  get xw() { return this.Location.x + this.Size.x; }
  /** pozitia + marimea */
  get yh() { return this.Location.y + this.Size.y; }
}
