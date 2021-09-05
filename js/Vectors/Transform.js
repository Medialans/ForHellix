import { IExecutable } from "../System/Executable.js"
import { Rect } from "./Rect.js"
import { Vector2 } from "./Vector2.js"


export class Transform extends IExecutable{
    /**
         * @param {number} x 
         * @param {number} y 
         */
    constructor(x=0,y=0,autoExecute = true){
        super(autoExecute)
        this._x = x
        this._y = y
        /**@type {Transform} */
        this._parent = null
        /**@type {Transform[]}*/
        this._childs = []
    }
//=========================================================Get/Set
//#region Get/Set Location and Size

    /**Pozitia globala
     * @returns {number}
     */
     get gX(){
        if(this._parent)
            return this._parent._x + this._x
        return this._x
    }
    /**Pozitia globala
     * @returns {number}
     */
    get gY(){
        if(this._parent)
            return this._parent.y+this._y
        return this._y
    }
    /**Pozitia globala
     * @returns {Vector2}
     */
     get gGlobal(){
        return new Vector2(this.gX,this.gY)
    }
    
    /**Pozitia locala
     * @returns {number} */
    get x(){
        return this._x
    }
    /**Pozitia locala
     * @param {number} value */
    set x(value){
        this._x = value
    }
    /**Pozitia globala
     * @returns {number} */
    get y() {
        return this._y
    }
    /**Pozitia locala
     * @param {number} value */
    set y(value) {
        this._y = value
    }
    /**@param {Vector2} value*/
    set Position(value){
      if(!value)return
      this._x = value.x
      this._y = value.y
    }
    
    /**@returns {Vector2}*/
    get Position(){return new Vector2(this._x,this._y)}
    //#endregion


    //#region Parent/Child
    /**@param {Transform} parent*/
    set Parent(parent){
        if(!(parent instanceof Transform))
            throw new TypeError("Argument parent is not instanceof Transform")
        this._parent = parent
    }
    /**@returns {null|Transform} null daca nare parinte */
    get Parent(){
        return this._parent
    }
    AddChild(value){
      if(!(value instanceof Transform))
        throw new TypeError("Child is not instanceof Transform")
      this._childs.push(value)
      value.Parent = this
    }
    /**
     * Stergem copii
     * @param {Transform|number} child 
     * @returns {this}
     */
    RemoveChild(child){
        if(child instanceof Transform)
            this._childs.splice(this._childs.indexOf(child),1)
        else if(child instanceof Number)
            if(child < this._childs.length)
                this._childs.splice(child,1)
            else
                throw new RangeError(`child max len is ${this._childs.length} you change ${child}`)    
        else
            throw new TypeError("remove only can number|Transform")
        return this            
    }
    //#endregion
}
