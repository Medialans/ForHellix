import {Vector2} from "./../Vectors/Vector.js"

export class TetrisFigure{
  /**tate figurile
  */
  static Figures = [
    {points:[
      new Vector2(0,0),
      new Vector2(0,1),
      new Vector2(0,2),
      new Vector2(1,2),
      ]}
    ]
  
  constructor(field){
    this._figureIndex = 0
    this.field = field

    this.points = TetrisFigure.Figures[this._figureIndex]
    this.location = new Vector2(this.field.location.x,this.field.location.y)
  }
  /**
   * @param {CanvasRenderingContext2D}
   */
  draw(ctx){
    
    for(let p of this.points.points){
      ctx.fillRect(
        this.location.x+p.x*this.field.cellRect.w,
        this.location.y+p.y*this.field.cellRect.h,
        this.field.cellRect.w,this.field.cellRect.h)
    }
  }
}
