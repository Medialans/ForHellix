import {Vector2} from '../Vectors/Vector.js'
/**
 * Cream 2d masiv
 * @param {Vector2} mapSize marimea map
 * @param {(location:Vector2)=>T} callback
 * @returns {T[][]}*/
export function Create2DArray(mapSize,callback = null){
      
      let r = []
      for(let x=0; x<mapSize.x; x++){
          r.push([])
        for(let y=0; y<mapSize.y; y++){
            if(!callback)
                r[x].push([])
            else
                r[x].push(callback(new Vector2(x,y)))
        }
      }
      return r
  }

/**
 * Chemam functia din masivul de obecte numai daca obectula are asa functie
 * @param {Array} array 
 * @param {string} FNname 
 * @param  {...any} args 
 */
export function CallFunctionOnArray(array,FNname,...args){
    array.forEach(e=>e[FNname]?.(array))
}

Array.prototype.nextKey = function(curentKey){
  for(let i=curentKey+1; i<this.length; i++){
    if(this[i])
      return i
  }
  return -1
}

Array.prototype.KeyAutoComplet = function(){
  for(let i=0; i<this.length; i++){
      if(this[i]){
        let nk = this.nextKey(i)
        if(nk==-1)return this
        let step = nk-i
        let gnsir = this.GENNumberStepInRange(this[i],this[nk],step);
        
        for(let e=0;e<gnsir.length;e++){
          this[i+e+1] = gnsir[e]
        
        }
      }

  }
}

Array.prototype.GENNumberStepInRange = function(min,max,range){
  let r = []
  let step = (max-min)/range
  for(let i=1;i<range;i++){
    r.push(min+step*i)
  }
  return r
}