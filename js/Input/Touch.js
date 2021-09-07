import Listener from "../System/Listener.js"


export default class InputTouch{
  _listener = new Listener()
  
  constructor(el="body"){
    
    let doc = document.querySelector(el)
    doc.addEventListener('touchstart',this.touchStart.bind(this))
    doc.addEventListener('touchmove',this.touchMove.bind(this))
    doc.addEventListener('touchend',this.touchEnd.bind(this))
  }
  /**
  * @param {"start"|"move"|"end"} listen
  * @param {({startPoint:Vector2,movePoint:Vector2,offset:Vector2,direction:Vector2})=>void} callback*/
  subscribe(listen,callback){
    this._listener.subscribe(listen,callback)
  }
  /**
  * @param {"start"|"move"|"end"} listen
  * @param {Function} callback*/
  unsubscribe(listen,callback){
    this._listener.unsubscribe(callback)
  }
  /**@param {TouchEvent} e*/
  touchStart(e){
    this.startPoint = this.vector2FromTouch(e)
    this._listener.emit("start",this.startPoint)
  }
  
  /**@param {TouchEvent} e*/
  touchMove(e){
    if(e.touches.length == 1){
      let movePoint = this.vector2FromTouch(e)
      this.offset = movePoint.math("-",this.startPoint)
      this.direction = this.offset.normalizeByStep(.01).math('floor')
      
      this._listener.emit("move",{
        startPoint:this.startPoint,
        movePoint,
        offset    :this.offset,
        direction :this.direction
      })
    }
  }
  /**@param {TouchEvent} e*/
  touchEnd(e){
    
  }
  /**
   * @param {TouchEvent} touches*/
  vector2FromTouch(touchEvent,touchIndex = 0){
    let {clientX,clientY} = touchEvent.touches[touchIndex]
    
    return new Vector2(clientX,clientY)
  }
  
  destroy(){
    document.removeEventListener("touchstart",this.touchStart)
    document.removeEventListener("touchmove",this.touchMove)
    document.removeEventListener("touchend",this.touchEnd)
  }
}

