//======================================Vector
class Vector{
  //get set x
  get x(){return this._x}
  set x(value){if(value)this._x = value}
  //get set y
  get y(){return this._y}
  set y(value){if(value)this._y = value}
  constructor(x=0,y=0){
    this._x = x
    this._y = y
  }
}
class Vector2 extends Vector {
  constructor(x =0, y=0) {
    super(x,y)
  }
  /**Face ca coordinatele sa nu iasa din marimile vec*/
  NormalizeInRange(vec) {
    this._x = this._x % vec.x
    this._x = this._x % vec.y
  }
  /**
   * Setam x si y 
   * @param {number} x
   * @param {number} y
   * @returns {this}
   */
  Set(x=0,y=0){
    if(!x&&!y)
      throw new TypeError(`x:${!x} | y:${!y} is undifined|null`)
    this._x = x
    this._x = y
    return this
  }
  /**
   * Normalizam Vectorul de la -1 pina la 1
   * @returns {this}
   */
  Normalize(){
      this._x = this._x<-1?-1:this._x>1?1:this._x
      this._y = this._y<-1?0:this._y>1?1:this._y
      return this
  }
  /**
   * Adunam vectorii
   * @param {Vector|Vector2} vec 
   * @returns {Vector2}
   */
  Plus(vec) {
    return new Vector2(
      this.x + vec.x,
      this.y + vec.y
    )
  }
  /**
   * Scadem vectorii
   * @param {Vector|Vector2} vec 
   * @returns {Vector2}
   */
  Minus(vec){
    return new Vector2(
      this.x-vec.x,
      this.y-vec.y
    )
  }
  /**
   * Inmultim vectorii
   * @param {Vector|Vector2} vec 
   * @returns {Vector2}
   */
  Summ(vec) {
    return new Vector2(
      this.x * vec.x,
      this.y * vec.y
    )
  }
  /**
   * Inpartim vectorii
   * @param {Vector|Vector2} vec 
   * @returns {Vector2}
   */
  Divide(vec) {
    return new Vector2(
      this.x / vec.x,
      this.y / vec.y
    )
  }
  /**
   * Cream vector2 din Touch
   * @param {Touch} touch
   * @param {'client'|'page'} type ce tip de pozitie luam mai multe in documentatie js
   * @returns {Vector2}*/
  static fromTouch(touch, type = 'client') {
    if (type == 'client')
      return new Vector2(touch.clientX, touch.clientY)
    if (type == 'page')
      return new Vector2(touch.pageX, touch.pageY)
    else
      throw new Error('type is unknow')
  }
}


export {Vector,Vector2}