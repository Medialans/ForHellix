import { Rect, Vector2 } from "./Vector.js"

export class Transform{
    /**
         * @param {number} x 
         * @param {number} y 
         */
    constructor(x=0,y=0){
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
    set position(value){
      if(!value)return
      this._x = value.x
      this._y = value.y
    }
    
    /**@returns {Vector2}*/
    get position(){return new Vector2(this._x,this._y)}
    /**Pozitia locala
     * @returns {Vector2} */
    get local() {
        return new Vector2(this._x,this._y)
    }
    /**Pozitia globala
     * @returns {Vector2}
     */
    get global(){
        if(this._parent)
            return new Vector2(this._parent.x+this.x,this._parent.y+this.y)
        return this.local
    }
    
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
    //#endregion
}