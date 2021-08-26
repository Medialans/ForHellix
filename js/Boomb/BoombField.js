import {Vector2,Rect} from "../Vectors/Vector.js"
import {BoombFieldData} from './BoombFieldData.js'
import {DrawField,DrawCell} from './BoombDraw.js'

//======================================Game
export class BoombField extends BoombFieldData{
constructor(ctx){
    super()
    /**@type {CanvasRenderingContext2D}*/
    this.ctx = ctx
}
  //cind pornim joaca
  Start(){
    this.Resize()
    console.log(1998);
    this.Init()
    //desena field
    DrawField(ctx,this)
    
  }
  
  Init(){
      this.generateGame()
      this.cells.forEach(el=>{
          el.Start()
      }) 
  }
  //Cind se apasa pe fereastra
  MouseDown(mouse){
    //daca nu apasam pe field
    if(!this.Rect.IsInside(mouse))return
    //optinem in ce patrat sa apasat
    this.activeCell = Rect.FixLocationOnVector(new Vector2(mouse.x-this.x,mouse.y-this.y),this.cellRect.Size)
    //atentionam cell ca a fost apasata
    this.GetCellData(this.activeCell).MouseDown()
    DrawField(this.ctx,this)
  }
  GameOver(){
      console.log("GameOver");
  }
 

}