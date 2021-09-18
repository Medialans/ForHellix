import Vector2 from "../Vector/Vector2.js"
import FieldData from "./FieldData.js"
import Cell from "./Cell.js"
import {Foreach2D} from "../System/Array/FArray.js"
export default class Field extends FieldData{
  
  constructor(){
    super()
  
    super.Avake()
    super.Start()
    
    this._initCell()
  }
  
  _initCell(){
    for(let i=0; i<this.spawCout; i++){
      this.createCell()
    }
  }
  
  createCell(){
    let location = this.rnd.nextVector2(Vector2.Zero,this.cellCount)
    let {x,y} = location
    if(this.matrixCell[y][x]!=null) return
    
    let cell = new Cell(this)
        cell.location = location
        
    this.matrixCell[y][x] = cell
    return cell
  }
  
  
  
  moveCells(direction){
    for(let x=0; x<this.cellCount.x; x++){
      for(let y=0; y<this.cellCount.y; y++){
        let curent = new Vector2(x,y)
        if(this.getCell(curent)!=null)
        this.moveCell(curent,direction)
      }
    }
  }
  
  
  
  moveCell(location,direction){
  
    let dir = direction.x != 0 ?
      direction.x >= 0 ? this.cellCount.x - location.x-1 : location.x :
      direction.y >= 0 ? this.cellCount.y - location.y-1 : location.y
    
    let nextLocation = location
    let nextCell = null
    
    for(let i=0; i<dir; i++){
      let nc = nextLocation.Math("+",direction)

      nextCell = this.getCell(nextLocation)
      console.log(nc.x,nc.y);
      if(nextCell == -1)break
      nextLocation = nc
    }
    this.setCellFrom(location,nextLocation)
  }
  getCell(location){
    let {x,y} = location
    if(location.Bool("<",Vector2.Zero,"x|y")||location.Bool(">",this.cellCount,"x|y"))return -1
    return this.matrixCell[y][x]
  }
  setCell(cell,location){
    let {x,y} = location
    if(location.Bool("<",Vector2.Zero,"x|y")||location.Bool(">",this.cellCount,"x|y"))return -1
    let gcell = this.getCell(location)
    
    if(gcell != null)
      this.removeCell(location)

      
    this.matrixCell[y][x] = cell
    cell.location = location
  }
  setCellFrom(from,to){
    let cell = this.getCell(from)
  
    if(cell == null)return null
    
    this.matrixCell[from.y][from.x] = null
    this.setCell(cell,to)
  }
  removeCell(location){
    let {x,y} = location
    
    let cell = this.getCell(location)
    cell?.remove()
    this.matrixCell[y][x] = null
  }
}