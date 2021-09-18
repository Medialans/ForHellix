import Random from "../System/Random.js"
import {Create2DArray} from "../System/Array/FArray.js"
import Vector2 from "../Vector/Vector2.js"

import BGHtmlElement from "./BGHtmlElement.js"
import FieldHtmlElement from "./FieldHtmlElement.js"

import FieldTouch from "./FieldTouch.js"

export default class FieldData{
  cellCount = new Vector2(4, 4)
  cellSize = new Vector2(64, 64)
  fieldSize = new Vector2(256, 256)
  cellCounts = 16
  spawCout = 3
  rnd = new Random()
  
  
  constructor(){
    
    this.matrixCell = Create2DArray(this.cellCount,()=>null)
    this.fdElement = new FieldHtmlElement(this)
    this.bgElement = new BGHtmlElement(this)
    
    this.touch = new FieldTouch(this)
  }
  
  Avake(){
    
    this.fdElement.Avake()
    this.bgElement.Avake()
    
  }
  Start(){
    this.fdElement.Start()
    this.touch.Start()

  }
}