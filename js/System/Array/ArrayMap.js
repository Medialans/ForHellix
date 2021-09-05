import {Errors } from "../Eror/Eror.js"

export class ArrayMap{
    /**@param {boolean} instance daca true: se va permite de adaugat acelas tip de obect*/
    constructor(instance){
        this.instance = instance
        this._arrayMap = []
    }
    /**Lungimea map */
    get length(){return this._arrayMap.length}
    /**@returns {any[]} */
    get array(){return this._arrayMap}
    /**
     * @param {(element:any,index:number,array:[])=>void} callback
     * @returns {this} 
     */
    forEach(callback){
        this._arrayMap.forEach(callback)
        return this
    }
    /**Aradugam element in masiv
     * @param {any} element 
     * @returns {this}
     */
    add(element){
        if(this.instance)
            Errors.ArrayInstance(this._arrayMap,element)
        this._arrayMap.push(element)
        return this
    }
    /**Optine elementul din masiv cu indexul
     * @param {number} index 
     * @returns {any}
     */
    get(index){
        Erors.ArrayRange(this._arrayMap,index)
        return this._arrayMap[index]
    }
    /**Stergem elementul din masiv
     * @param {any} start 
     * @param {number|undefined} delleteCount 
     * @returns {this}
     */
    remove(start,delleteCount = 1){
        if(typeof start != "number"){
            if(this.instance)
                Errors.ArrayInstance(this._arrayMap,start)
            let i = this._arrayMap.indexOf(start)
            if(i==-1)
                throw new Error("remove on map don't contains this object")
            this._arrayMap.splice(i,1)
        }else{
            Errors.ArrayRange(this._arrayMap,start)
            this._arrayMap.splice(start,delleteCount)
        }
        return this
    }
}