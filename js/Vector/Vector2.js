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
  static get Zero() {return new Vector2(0,0)}
  static get Any() {return new Vector2(1,1)}
  static get Left() {return new Vector2(-1,0)}
  static get Right() {return new Vector2(1,0)}
  static get Up() {return new Vector2(0,-1)}
  static get Down() {return new Vector2(0,1)}
  
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
  Translate(vec){
    this.x +=vec.x
    this.y +=vec.y
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
      let xMath = math,yMath = math;
      
      if(math=="ceil"||math=="floor"){
        xMath = this._x>=0?"floor":"ceil"
        yMath = this._y>=0?"floor":"ceil"
      }
      
      let oper = new Function(`return {x:Math.${xMath}(${this._x}),y:Math.${yMath}(${this._y})}`)()
      x = oper.x
      y = oper.y
    }
    return new Vector2(x,y)
  }
  /**
   * @param {"<"|">"|"=="|"<="|">="|"!="} operation
   * @param {Vector2} vector
   * @param {"x"|"y"|"xy"|"x&y"|"x|y"} verific
   * @returns {boolean|{x:boolean,y:boolean}}
   */
  Bool(operation,vector,verific = "x&y"){
    let boolMatch = operation.match(/(\=\=|\!\=|\<\=|\>\=|\<|\>)/)?.[0]
    if(boolMatch == null) return false
    
    let exec = new Function(`
      return {
        x:${this.x}${boolMatch}${vector.x},
        y:${this.y}${boolMatch}${vector.y}
      }
    `)()
    
    return verific == "xy"?exec:verific == "x&y"?(exec.x && exec.y):verific=="x|y"?(exec.x ||exec.y):verific=="x"?exec.x:exec.y
  }
  
  Normalize(){
    return new Vector2(
      this.x>1?1:this.x<-1?-1:this.x,
      this.y>1?1:this.y<-1?-1:this.y
      )
  }
  FixNormalize(){
    return new Vector2(
      this.x>1?1:this.x<-1?-1:0,
      this.y>1?1:this.y<-1?-1:0
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
  
  Invert(){
    return new Vector2(this.x>0?-this.x:this.x,this.y>0?-this.y:this.y)
  }
}



export {Vector,Vector2}