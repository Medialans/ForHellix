import Vector2 from "../Vector/Vector2.js"
import Field from "./Field.js"

export default class CellHtmlElement{
  _element = document.createElement("div")
  
  get HtmlElement(){return this._element}

  
  /**@param {Field} field*/
  constructor(field){
    this.FD = field
    this._element.classList.add("cell")
    this._element.style.width = this.FD.cellSize.x + "px"
    this._element.style.height = this.FD.cellSize.y + "px"
    
    this.FD.fdElement.FieldElement.append(this._element)
  }
  updateTransform(location){     
    this._element.style.transform = `translate(${location.x*100}%,${location.y*100}%)` 
  }
  
  
  
}