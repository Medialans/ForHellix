import {IExecutable} from './Executable.js'
import {Vector2} from '../Vectors/Vector2.js'
import {Rect} from '../Vectors/Rect.js'

export class Node2D extends IExecutable{
  get w(){return this.Size.x}
  set w(value){this.Size.x=value}
  get h(){return this.Size.y}
  set h(value){this.Size.y=value}
  
  get globalRect(){return new Rect(this.global.x,this.global.y,this.w,this.h)}
  
  constructor(){
    super()
    this.Size = new Vector2(320,320)
    this._collision = new NodeCollision(this)
  }
  
  /**@returns {NodeCollision}*/
  get Collision(){return this._collision}
}

class NodeCollision{
  /**@param {Node2D} node*/
  constructor(node){
    this.node = node
  }
  /**@param {Vector2} vec*/
  isInside(vec){
    return this.node.globalRect.IsInside(vec)
  }
}