import { Input } from "../Input/Input.js";
import { Main } from "../main.js";
import { IExecutable } from "../System/Executable.js";
import { Transform } from "../Vectors/Transform.js";
import { Rect, Vector2 } from "../Vectors/Vector.js";

export class TetrisField extends Transform{

  
  Start(){
    /**@type {CanvasRenderingContext2D} */
    this.ctx = Main.CTX
    this.CellRect = new Rect(12,25,16,16)
    this.Size = this.CellRect.getMass
    this.Draw()
  }

  Update(d){
    
  }
  FixedUpdate(d){
    if(Input.IsKey('d').isPress){
      this.x+=1;
      // console.log(d);
    }
    if(Input.IsKey('a').isPress){
      this.x-=1;
      
      // console.log(d);
    }
    this.Draw()
  }

  Draw(){
    this.ctx.beginPath()
    this.ctx.rect(this.x,this.y,this.Size.x,this.Size.y)
    this.ctx.stroke()
    this.ctx.fillText(Main.FPS,this.Size.x+30,this.y+10)
    this.ctx.closePath()
  }
}

