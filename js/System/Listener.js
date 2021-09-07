export default class Listener{
  constructor(){
    this._list = []
  }
  emit(listen,...args){
    
    let lsIndex = this._getListen(listen)
    
    if(lsIndex == null)return this
    let targetls = this._list[lsIndex]
    for(let callback of targetls.callback){
      callback(...args)
    }
    return this
  }
  /**
  * @param {string} listen
  * @param {function} callback
  * @returns {this}*/
  subscribe(listen,callback){
    let ls = this._getListen(listen)
    if(!ls)
      this._list.push({listen,callback:[callback]})
    else
      this._list[ls].callback.push(callback)
    return this
  }
  unsubscribe(listen,callback){
    let lsIndex = this._getListen(listen)
    if(lsIndex == null)return this
    let targetls = this._list[lsIndex]
    
    for(let i in targetls.callback){
      let targetCallback = targetls.callback[i]
    
      if(targetCallback === callback){
        targetls.callback.splice(i,1)
        return this
      }
    }
    
    return this
  }
  
  _getListen(lsName){
    for(let i=0; i<this._list.length;i++){
      let ls = this._list[i]
      if(ls.listen === lsName)
        return i
    }
  }
}