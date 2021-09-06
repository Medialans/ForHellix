import Vector2 from "../Vector/Vector2.js"
import Cell from "./Cell.js"
import Random from "../System/Random.js"

export default class Field{
  cellSize = new Vector2(80,80)
  cellCount = new Vector2(4,4)
  spawnCellCount = 3
  /**@type {Cell[]}*/
  cells = []
  get style(){
    return {
      width:this.fieldSize.x+"px"
    }
  }
  constructor(seed){
    this.rnd = new Random()
    this.Start()
  }
  Start(){
    this.fieldSize = this.cellSize.Math("*",this.cellCount)
    this.cellCount = this.cellCount.x*this.cellCount.y
    //init cell
    for(let i=0; i<this.cellCount; i++){
      this.cells.push(new Cell(this,i))
    }
    //spaw cell
    for(let i=0; i<this.spawnCellCount; i++){
      let index = this.rnd.nextRange(0,this.cellCount)
      this.cells[index].num = 2
    }
  }
  
}