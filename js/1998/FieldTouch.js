import InputTouch from "../Input/Touch.js"
import Field from "./Field.js"
import Vector2 from "../Vector/Vector2.js"


export default class FieldTouch {
  /** @param {Field} field*/
  constructor(field){
    this.FD=field
  }
  Start(){
    this._inputTouch = new InputTouch(this.FD.fdElement.RootElement)
    this._inputTouch.stepDirection = .01
    this._inputTouch.subscribe("start",this.touchStart.bind(this))
    this._inputTouch.subscribe("move",this.touchMove.bind(this))
  }
  touchStart(e) {
    this.moving = false
  }
  
  touchMove(e) {
    if (this.moving) return

    let { direction } = e

    let targetDirection = new Vector2()

    if (direction.x != 0) {
      targetDirection.x = direction.x
      this.moving = true
    } else if (direction.y != 0) {
      targetDirection.y = direction.y
      this.moving = true
    } else
      return
    this.FD.moveCells(targetDirection)
  }
}