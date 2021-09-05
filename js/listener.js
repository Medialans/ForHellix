class Listener{
  _list = new ArrayMap()
  
  emit(listener,...args){
    let ls = this._list.getId(listener)
    
    for(let {data} of ls){
      data(args);
    }
  }
  
  subscribe(listener,callback){
    this._list.add(listener,callback)
  }
  
  unsubscribe(callback){
    this._list.removeData(callback)
  }
}