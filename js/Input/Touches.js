import {Listener} from '../System/Listener.js'
import {Vector2} from '../Vectors/Vector.js'
export class TouchControler extends Listener {
  static UP = "UP"
  static DOWN = "DOWN"
  static LEFT = "LEFT"
  static RIGHT = "RIGHT"
  static NONE = "NONE"
  
  offsetMove = new Vector2(0,0)
  offsetStart = new Vector2(0,0)
  
  constructor(){
    super()
    document.addEventListener('touchstart',this._start.bind(this))
    document.addEventListener('touchmove',this._move.bind(this))
    document.addEventListener('touchend',this._end.bind(this))
  }
  /**
   * @param {'down'|'up'|'move'} listen
   * @param {(touches:TouchList,controler:this)=>void} callback
   * @returns this
   */
  on(listen,callback){
    return super.on(listen,callback)
  }
  /**
   * @param {TouchEvent} e
   */
  _start(e) {
    this.offsetStart.Set(
      e.touches[0].clientX,
      e.touches[0].clientY
    )
    this.emit('down',e.touches,this)
  }
  /**
   * @param {TouchEvent} e
   */
  _move(e) {
    this.offsetMove.Set(
      e.touches[0].clientX,
      e.touches[0].clientY
    )
    this.emit('move',e.touches,this)
  }
  /**
   * @param {TouchEvent} e
   */
  _end(e) {
    this.emit('up',e.touches,this)
  }
  get Offset(){
    return this.offsetMove.Minus(this.offsetStart)
  }
  get Direction(){
    return this._isDirectionOnStr(this.Offset.x,this.Offset.y,1,1)
  }
  /**
   * In ce directie se misca primul touch. Chiama direction() numai in loc de x,y pune offsetul 
   * @param {number} radius pina le ce numar ne putem misca
   * @param {number} speed cu ce viteza ne miscam
   * @returns {{x:number,y:number,dx:string,dy:string}} Left|Right Up|Down
   */
  _directionOfOffset(radius = 1,speed = 1){
    return this.direction(this.offset.x,this.offset.y,radius,speed)
  }
    /**
     * In ce directie se misca primul touch. Chiama directionOfOffset() numai mai intoarce si cind am ajuns la radius in ce directii neam miscat
     * @param {number} radius pina le ce numar ne putem misca
     * @param {number} speed cu ce viteza ne miscam
     * @returns {{x:number,y:number,dx:string,dy:string,end_dx:string,end_dy}} end_dx,end_dy parametrele noi... cind am ajuns la radius in ce directii neam miscat
     */
  _directionOfOffsetWithRadius(radius = 1,endRadius = 1, speed = 1){
    let {dx,dy} = this.isDirectionOnStr(this.offset.x,this.offset.y,endRadius,speed)
    return {...this.directionOfOffset(radius,speed),end_dx:dx,end_dy:dy}
  }
  /**
   * @param {number} x pozitia unde ne aflam de la 0
   * @param {number} y pozitia unde ne aflam de la 0
   * @param {number} radius pina le ce numar ne putem misca
   * @param {number} speed cu ce viteza ne miscam
   * @returns {{x:number,y:number,dx:string,dy:string}} Left|Right Up|Down
   */
  _direction(x, y, radius = 1, speed = .01) {
    let nx = this.normalize(x, radius, speed)
    let ny = this.normalize(y, radius, speed)
    let { dx, dy } = this.isDirectionOnStr(nx, ny, 0, 1)
    return {
      x: nx,
      y: ny,
      dx,
      dy
    }
  }
  /**
   * Miscam x cu viteza speed pina la radius
   * @param {number} x pozitia unde ne aflam de la 0
   * @param {number} radius pina le ce numar ne putem misca
   * @param {number} speed cu ce viteza ne miscam
   * @returns {number} x normalizat
   */
  _normalize(x, radius = 1, speed = 1) {
    let _x = x * speed
    return _x < -radius ? -radius : _x > radius ? radius : _x
  }
  /**
   * @param {number} x pozitia unde ne aflam de la 0
   * @param {number} y pozitia unde ne aflam de la 0
   * @param {number} radius pina le ce numar ne putem misca
   * @param {number} speed cu ce viteza ne miscam
   * @returns {{dx:string,dy:string}} Left|Right Up|Down
   */
  _isDirectionOnStr(x, y, radius, speed) {
    let spx = x * speed
    let spy = y * speed
    let _x = spx < -radius ? TouchControler.LEFT : spx > radius ? TouchControler.RIGHT : TouchControler.NONE
    let _y = spy < -radius ? TouchControler.UP : spy > radius ? TouchControler.DOWN : TouchControler.NONE
    return { dx: _x, dy: _y }
  }
}


export class TouchData{
    /**
     * @param {Touch} touch*/
    constructor(touch,index){
        this.touch = touch
        this.isPressed = false
        this.isMoved = false
        this.index = index
    }
    
    start(){
        this.isPressed = true
        return this
    }
    Move(){
        this.isMoved = true
        return this
    }
    End(){
        console.log('23');
        if(this.isPressed && !this.isMoved)
        console.log("press");
        else
        console.log("move");
        return this
    }
}