import FieldData from "./FieldData.js"

export default class FieldHtmlElement{
  get FieldElement(){return this._field}
  get RootElement(){return this._root}
  /**@param {FieldData} fieldData*/
  constructor(fieldData){
    this.FD = fieldData
  }
  
  Avake(){
    this._root = document.createElement("div")
    this._root.classList.add("map")
    this._root.id = "1998game"
    this._root.style.width = this.FD.fieldSize.x + "px"
    this._root.style.height = this.FD.fieldSize.y + "px"
    
    this._field = document.createElement("div")
    this._field.classList.add("field")
    this._root.append(this._field)
  }
  
  Start(){
    document.body.append(this._root)
  }
}