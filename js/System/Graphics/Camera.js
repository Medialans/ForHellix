import {Node2D} from '../Node2D.js'
/**
 * Camera din aplicatie
 */
export class Camera extends Node2D{
  
  
  /**Daca in Camera.Main = null atunci punem this */
  constructor(){
    super() 
    if(!Camera.Main)
      Camera.Main = this
  }  
  
  /**@type {Camera}*/
  static Main = null
  /**@type {null|HTMLCanvasElement}*/
  static Canvas = null
  /**@type {null|CanvasRenderingContext2D} */
  static Context = null
  /**
   * @param {number} w 
   * @param {number} h 
   * @param {null|string} location unde se va pune canvasul in html class|id
   * @returns {HTMLCanvasElement} 
   */
  static CreateCanvas(w,h,location){
    Camera.Canvas = document.createElement('canvas')
    Camera.Canvas.width = w
    Camera.Canvas.height = h
    Camera.Context = Camera.Canvas.getContext('2d')
    if(location)
        document.body.querySelector(location)?.append(Camera.Canvas)
    else
      document.body.append(Camera.Canvas)
    return Camera.Canvas
  }
  /**pozitia din fereastra in world position
   * @param {Vector2} vec
   * @returns {Vector2}
   */
  static ScreenToWorldPosition(vec) {
    return new Vector2(
      -(Camera.Main.x - vec.x),
      -(Camera.Main.y - vec.y)
    )
  }
  /**Cind sa incarcat tot documentul */
  static Ready(callback){
    document.addEventListener('DOMContentLoaded',callback)
  }
}
