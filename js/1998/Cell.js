import Field from "./Field.js"
import Vector2 from "../Vector/Vector2.js"
import CellData from "./CellData.js"


export default class Cell extends CellData{
  /** @param {Field} field*/
  constructor(field){
    super(field)
    this.FD = field
  }
  
  Move(direction) {
    let dir = direction.x != 0 ?
      direction.x >= 0 ? this.FD.cellCount.x - this.location.x - 2 : this.location.x  :
      direction.y >= 0 ? this.FD.cellCount.y - this.location.y - 1 : this.location.y
    let loc = this.location
    
    for (let i = 0; i < dir; i++) {
      loc = loc.Math("+",direction)
      let cell = this.FD.getCell(loc)
      if(cell)
        cell.num += 2
  
    }
    this.FD.setCell()
  }

  remove(){
    this.cellElement.HtmlElement.remove()
  }
}