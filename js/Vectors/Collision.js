import {Node} from './Node.js'
import {Vector2} from '../Vectors/Vector.js'

export class Collision{
  /**
   * @param {Node} node
   * @param {Vector2} point
   */
  isInside(node,point){
    return (point.x > node.x && point.x < node.x && point.y > node.y && point.y < node.h)
  }

  
}

