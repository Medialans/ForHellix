import { IExecutable } from "../System/Executable.js";
import {Vector2} from '../Vectors/Vector.js'
export class Input extends IExecutable{
    /**@type {{key:string,isDown:boolean,isUp:boolean,isPress:boolean}[]} */
    static _keys = []
    
    Start(){
        
        /**@param {KeyboardEvent} e */
        window.onkeydown = (e)=>{
            Input._keys.push({key: e,isDown:true,isPress:true,isUp:false})            
        }
        /**@param {KeyboardEvent} e */
        window.onkeyup = (e)=>{
            for(let i of Input._keys){
                if(i.key = e.key){
                    i.isPress = false
                    i.isUp = true
                }
            }            
        }
    }
    FixedUpdate(){
        Input._keys.forEach((e,i)=>{
            if(e.isUp)
                Input._keys.splice(i,1)
            else if(e.isDown){
                e.isDown = false
            }
        })
    }

    static IsKey(key){
        for(let e of Input._keys){
            if(e.key = key){
                console.log(e);
                return e
            }
        }
        return {key: 'Null',isDown:false,isPress:false,isUp:false}
    }
}