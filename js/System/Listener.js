export class Listener{
  constructor(){
    this._list = []
  }
  /**
  * @param {string} listen
  * @param {function} callback
  * @returns {this}*/
  on(listen,callback){
    if(typeof callback != "function")
      throw new TypeError('callback can only function')
    this._list.push({listen,callback})
    return this
  }
  emit(listen,...args){
    this._list.forEach(l=>{
      if(listen == l.listen)
        l.callback(...args)
    })
  }
}