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
export default class Vector2 extends Vector {
  constructor(x =0, y=0) {
    super(x,y)
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
   * Distanta pina la vector
   * @param {Vector2|Vector} vec 
   * @returns {number}
   */
  Distance(vec){
    return Math.sqrt((this._x - vec._x) ** 2 + (this._y - vec._y) ** 2)
  }
  /**
   * @param {'*'|'/'|'+'|'-'|'%'|'**'|"round"|"ceil"|"floor"} opperation 
   * @param {Vector|Vector2} vector 
   */
  Math(opperation,vector){
    let opp = opperation.match(/(\*|\+|\-|\/|\*\*|%)/)?.[0]
    let x,y;
    if(opp){
      let oper = new Function(`return {x:${this._x}${opp}${vector._x},y:${this._y}${opp}${vector._y}}`)()
      x = oper.x
      y = oper.y
    }
    let math = opperation.match(/(round|floor|ceil)/)?.[0]
    if(math){
      let oper = new Function(`return {x:Math.${math}(${this._x}),y:Math.${math}(${this._y})}`)()
      x = oper.x
      y = oper.y
    }
    return new Vector2(x,y)
  }
  Normalize(){
    return new Vector2(
      this.x>1?1:this.x<-1?-1:this.x,
      this.y>1?1:this.y<-1?-1:this.y
      )
  }
  NormalizeByStep(step=1){
    return this.Dublicate()
            .Math("*",new Vector2(step,step))
            .Normalize()
  }
  Dublicate(){
    return new Vector2(this.x,this.y)
  }
}


export {Vector,Vector2}