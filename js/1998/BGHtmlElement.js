import FieldData from "./FieldData.js"

export default class BGHtmlElement{
  get HtmlElement(){return this.fieldbg}
  
  /**@param {FieldData} fieldData*/
  constructor(fieldData){
    this.FD = fieldData
  }
  
  Avake(){
    this.fieldbg  = document.createElement("div")
    this.fieldbg.classList.add("fieldbg")
    
    for (let i = 0; i < this.FD.cellCounts; i++) {
      let cellbg = document.createElement("div")
      cellbg.classList.add("cellbg")
      cellbg.style.width = this.FD.cellSize.x + "px"
      cellbg.style.height = this.FD.cellSize.y + "px"
      this.fieldbg.append(cellbg)
    }
    
    this.FD.fdElement.RootElement.append(this.fieldbg)
  }
}
