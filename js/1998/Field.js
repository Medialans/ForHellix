import Vector2 from "../Vector/Vector2.js"
//import Cell from "./Cell.js"
import Random from "../System/Random.js"

export default class Field{
  cellSize = new Vector2(45,45)
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
    this.rnd = new Random(seed)
    
  }
  Start(){
    this.fieldSize = this.cellSize.Math("*",this.cellCount)
    this.cellCount = this.cellSize.x*this.cellSize.y
    //init cell
    for(let i=0; i<this.cellCount; i++){
      cells.push(new Cell(this,i))
    }
    //spaw cell
    for(let i=0; i<this.spawnCellCount; i++){
      
    }
  }
  
}