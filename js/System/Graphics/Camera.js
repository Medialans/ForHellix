class Camera extends Node{
  /**@type {Camera}*/
  static Main = null
  constructor(){
    super() 
    if(!Camera.Main)
      Camera.Main = this
    
    this.input = {
      touch:new TouchControler()
      .on('down',this.TouchDown.bind(this))
      .on('up',this.TouchUp.bind(this))
      .on('move',this.TouchMove.bind(this))
    }
    
    this.Canvas = document.createElement('canvas')
    this.Canvas.width = this.w
    this.Canvas.height = this.h
    
    this.Context = this.Canvas.getContext('2d')
    
    document.body.append(this.Canvas)
  }
  
  Start(){
    if(this.init){
      this.init.bind(this)
    }
    console.log(this.Listener);
  }
  TouchMove(e,c){
    this.position = Vector2.fromTouch(e[0]).Minus(this.TSP)
  }
  TouchDown(e,c){
    let mp = Vector2.fromTouch(e[0])
    let cp = Camera.ScreenToWorldPosition(mp)
    if(this.Collision.isInside(cp))
      console.log("in");
    this.TSP = mp.Minus(this.position)
  }
  TouchUp(e,c){
  }
  Update(){
    
    this.Draw(this.Context)
  }

  Draw(ctx){
    ctx.clearRect(0,0,this.w,this.h)
    ctx.beginPath()
    ctx.rect(this.x,this.y,this.w,this.h) 
    ctx.stroke()
    ctx.closePath()
  }
  /**pozitia din fereastra in world position
   * @param {Vector2} vec
   * @returns {Vector2}
   */
  static ScreenToWorldPosition(vec) {
    return new Vector2(
      -(Camera.Main.x - vec.x),
      -(Camera.Main.y - vec.y)
    )
  }
}
