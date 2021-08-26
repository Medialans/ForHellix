import { CallFunctionOnArray} from "./FArray.js";
import {Transform} from '../Vectors/Transform.js'
export class IExecutable extends Transform{
    constructor(x=0,y=0,autoExecute = true){
      super(x,y)
      if(autoExecute)
        Executable.Execute = this
    }
    Awake(){}
    Start(){}
    /**@param {number} deltaTime */
    Update(deltaTime){}
    End(){}
    /*@param {CanvasRenderingContext2D} ctx*/
    Draw(ctx){}
}

export class Executable{
    /**@type {IExecutable[]} */
    static _executables = []
    static _interval = null
    static _MaxFPS = 60
    /** @param {IExecutable} value */
    static set Execute(value){
        if(value instanceof IExecutable){
            Executable._executables.push(value)
        }else{
            throw new TypeError("Need (object)value extends to IExecutable or IStaticExecutable")
        }
    }
    static Awake(){
        CallFunctionOnArray(Executable._executables,'Awake')
    }
    static Start(){
        CallFunctionOnArray(Executable._executables,'Start')
    }
    
    static Update(){
        Executable._interval = setInterval(()=>{
          CallFunctionOnArray(Executable._executables,'Update')
        },1000/Executable.MaxFPS)
    }
    
    static End(){
      clearInterval(Executable._interval)
      CallFunctionOnArray(Executable._executables,'End')
    }
}