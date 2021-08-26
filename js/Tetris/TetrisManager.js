import {TetrisField} from "./TetrisField.js"
import {Tick} from "./../Timers.js"
export class TetrisManager {
  
  constructor(){
    this._playerCount=1
    this._gameSpeed = {target:50,min:500,max:1000}
    this._fields = []
    this._timer = null
    this._tick = new Tick()
  }
  
  
  Start(ctx = CanvasRenderingContext2D){
    this.ctx = ctx
    this._fields.push(new TetrisField(this).Start())
    this._timer = setInterval(this.Update.bind(this),this._gameSpeed.min)
    this.gravity =0
    this.Update()
  }
  
  Update(){
    if(!this._tick.Update(this._gameSpeed.target))return
    //draw manager
    this._Draw()
    //update tetris fields
    for(let f of this._fields)
    f.Update()
  }
  
  _Draw(){
    this.ctx.clearRect(0,0,640,480)
  }
}

