import {Vector2} from './../Vectors/Vector.js'
import {DrawCell} from './BoombDraw.js'
export class BoombCell extends BoombCellData{
    /**
     * @param {BoombField} field*/
    constructor(field){
        super()
        this.field = field
    }
    
    Start(){

        this.Size = this.field.cellRect.Size
    }

        
    _initAroundBoomb(){
        
    }
    /**
     * @param {{location:Vector2,isNull:boolean}} data
     */
    set(data){
        if(data.location)
        this.location=new Vector2(data.location.x,data.location.y)
        if(data.isNull)
        this.IsNull = data.isNull
        return this
    }
    /**
     * @returns {BoombCell}*/
    MouseDown(){
        if(this.IsBoomb)
        this.field.GameOver()
        this.IsClicked = true
        return this
    }
    AroundMakeVisible(){
    }

    /**
     * Optinem pozitia globala a patratului
     * @param {Vector2} offset offsetul din grosimea patratului
     * @returns {Vector2} pozitia globala
     */
    GetCellLocationOnScreen(offset){
    let gl = this.GlobalLocation
    return new Vector2(
        gl.x+this.x*this.field.cellRect.w+ this.field.cellRect.w*offset.x,
        gl.y+this.x*this.field.cellRect.h+ this.field.cellRect.h*offset.y,)
    }
}
