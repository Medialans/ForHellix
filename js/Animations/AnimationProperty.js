import {Listener} from '../System/Listener.js'


export class AnimationProperty extends Listener{
  constructor(){
    super()
    this._propertys = []
    this._maxFrameCount = 0
    this.SpeedFrame = 1
    this.Fps = 45
    this.CurentFrame = 0
    this._interval = null
  }
  /**
   * @param {string} listen
   * @param {{index:number,property:any,id:number}[]} callback
   */
  on(listen,callback){
    super.on(listen,callback)
  }
  existIdOnFrame(id,frameIndex){
    for(let i in this._propertys[frameIndex]){
    if(this._propertys[frameIndex][i]?.id == id)
        return i
    }
    return -1
  }
  addKeyFrame(index,property,id){
    this._maxFrameCount = index>this._maxFrameCount?index:this._maxFrameCount
    
    if(this._propertys[index]){
      let i = -1
      if((i = this.existIdOnFrame(id,index)) !=-1)
        this._propertys[index][i] = {id,property,index}
      else
        this._propertys[index].push({index,property,id})
      console.log(i);
    }else
      this._propertys[index] = [{index,property,id}]
  }
  
  Play(){
    this._interval = setInterval(this._Update.bind(this),this.Fps)
  }
  
  _Update(){
    this.emit('update',this._propertys[this.CurentFrame])
    
    if(this.CurentFrame >= this._maxFrameCount)
      clearInterval(this._interval)
    this.CurentFrame++
  }
}
