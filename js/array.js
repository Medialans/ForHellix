class ArrayList {
  _arr = []
  add(item) {
    this._arr.push(item)
  }
  get(index) {
    return this._arr[index]
  }
}

class ArrayMap{
  /**@type {{id:string|number,data:any[]}[]}*/
  _arr = []
  
  add(id,data){
    for(let el of this._arr){
      if(el.id === id){
        el.data.push(data)
        return
      }
    }
    this._arr.push({id,data:[data]})
  }
  removeId(id){
    let data = this.containId(id)
    
    if(id==null)return
    this._arr.splice(data.indexOf,1)
  }
  removeData(obj){
    let data = this.contain(obj)
    if(data==null)return
    this._arr[data.indexOf].data.splice(data.indexOfData,1)
  }
  /**@returns {{id:string|number,data:any[],indexOf:number}|null}*/
  containId(cid){
    for(let i=0; i<this._arr.length; i++){
      let {id,data} = this._arr[i]
      
      if(id === cid)
        return {indexOf:i,id,data}
    }
  }
  /**@returns {{id:string|number,data:any,indexOf:number,indexOfData:number}|null}*/
  contain(obj){
    let r = null
    for(let i=0; i<this._arr.length; i++){
      let {id,data} = this._arr[i]
      
      for(let e=0; e<data.length; e++){
        let dobj = data[e]
  
        if(obj === dobj){
          r = {id,dobj,indexOf:i,indexOfData:e}
        }
      }
    }
    return r
  }
  
}
