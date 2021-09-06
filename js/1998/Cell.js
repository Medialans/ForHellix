import Field from "./Field.js"

export default class Cell{
  num = 0
  /**
   * @param {Field} field
   * @param {number} index
   */
  constructor(field,index){
    this.field = field
    this.index = index
  }
  get style(){
    return {
      width:  this.field.cellSize.x+"px",
      height: this.field.cellSize.y+"px",
      "background-color": this._genColor()
    }
  }
  _genColor(){
    if(this.num !=0){
      return "#a4c678"
    }
    return "#ff6"
  }
}