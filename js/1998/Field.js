import Vector2 from "../Vector/Vector2.js"
import Cell from "./Cell.js"
import Random from "../System/Random.js"
import InputTouch from "../Input/Touch.js"

export default class Field{
  cellSize = new Vector2(80,80)
  cellCount = new Vector2(4,4)
  spawnCellCount = 3
  touch = new InputTouch()
  
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
    this.touch.subscribe("move",(e)=>{
      console.log(e.direction.x);
    })
  }
  Start(){
    this.fieldSize = this.cellSize.Math("*",this.cellCount)
    this.cellCounts = this.cellCount.x*this.cellCount.y
    //init cell
    for(let i=0; i<this.cellCounts; i++){
      this.cells.push(new Cell(this,i))
    }
    //spaw cell
    for(let i=0; i<this.spawnCellCount; i++){
      let index = this.rnd.nextRange(0,this.cellCounts)
      this.cells[index].num = 2
    }
    var c = this.GetCell(new Vector2(9,0))
    console.log(c);
  }
  /**
  * @param {Vector2} point
  * @returns {Cell|null}
  */
  GetCell(point){
    
    let pos = point.x+(this.cellCount.x*point.y)
    
    if(pos<0||pos>this.cells.length)return null
    
    return this.cells[pos]
  }
  
}
