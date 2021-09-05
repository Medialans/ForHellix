import {BoombCell} from './BoombCell.js'
import {BoombField} from './BoombField.js'
import {Rect, Vector2} from '../Vectors/Vector.js'
/**
 * Desenam BoombField
 * @param {CanvasRenderingContext2D} ctx
 * @param {BoombField} field*/
export function DrawField(ctx,field){
    console.log(1);
    field.cells.forEach(e=>DrawCell(ctx,e))
    ctx.clearRect(field.x,field.y,field.w,field.h)
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.rect(
        field.x,
        field.y,
        field.w,
        field.h)
    if(field.activeCell.x !=-1)
    ctx.strokeStyle = "#a44"
    ctx.rect(
        field.x+field.activeCell.x*field.cellRect.w,
        field.y+field.activeCell.y*field.cellRect.h,
        field.cellRect.w,
        field.cellRect.h)
    ctx.stroke()
    ctx.closePath()
    field.cells.forEach(e=>DrawCell(ctx,e))
}
/**
 * Desenam BoombCell
 * @param {CanvasRenderingContext2D} ctx
 * @param {BoombCell} cell*/
export function DrawCell(ctx,cell,padding = 1){
    
    let gl = cell.GlobalLocation
    let rect = new Rect(
        gl.x+cell.x*cell.w+padding,
        gl.y+cell.y*cell.h+padding,
        cell.w-padding*2,
        cell.h-padding*2
    )
    
    ctx.beginPath()
    
    
    if(cell.IsClicked){//draw clicked
        let centerPos = cell.GetCellLocationOnScreen(new Vector2(.5,.5))
        ctx.textAlign = 'center'
        if(cell.IsBoomb){
            ctx.fillText('#',centerPos.x,centerPos.y)
        }else{
            ctx.fillText(cell.AroundBoomb,centerPos.x,centerPos.y)
        }
    }else{//draw default 
        ctx.fillRect(rect.x,rect.y,rect.w,rect.h)
    }
    ctx.closePath()
}