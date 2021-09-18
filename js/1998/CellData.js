import Vector2 from "../Vector/Vector2.js"
import CellHtmlElement from "./CellHtmlElement.js"


export default class CellData{
  _location = new Vector2()
  get location(){return this._location}
  set location(vec){
    this._location = vec
    this.cellElement.updateTransform(this._location)
  }
  _num = 0
  get num(){return this._num}
  set num(val){
    this._num = val
    this.cellElement.HtmlElement.innerHTML = this._num
  }
  
  constructor(field){
    this.cellElement = new CellHtmlElement(field)
    this.num = 2
  }
  
}