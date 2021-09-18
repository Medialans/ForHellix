import Vector2 from '../../Vector/Vector2.js'
/**
 * Cream 2d masiv
 * @param {Vector2} mapSize marimea map
 * @param {(location:Vector2)=>T} callback
 * @returns {T[][]}*/
export function Create2DArray(mapSize,callback = null){
      
      let r = []
      for(let x=0; x<mapSize.x; x++){
          r[x] = []
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
/**
 * @param {any[][]} array2d
 * @param {(targetLocation:Vector2,targetElement:any,direction:Vector2)=>void|null} callback
 * @param {Vector2} direction in ce directie vom lucra cu ciclu 0 nu primim numai -1 sau 1 x,y
 */
export function Foreach2D(array2d,callback,direction = new Vector2(1,1)){
  let dir = new Vector2()
      dir.x = direction.x==0?1:direction.x
      dir.y = direction.y==0?1:direction.y
  
  let lmin,lmax,jmin,jmax
  
  
  if(dir.x>0){
    lmin = 0
    lmax = array2d.length
  }else{
    lmin = array2d.length
    lmax = -1
  }
  
  if (dir.y > 0) {
    jmin = 0
    jmax = array2d[0].length-1
  } else {
    jmin = array2d[0].length-1
    jmax = -1
  }
  
  for(let l = lmin; dir.x>0?l<lmax:l>lmax; l+= 1*dir.x){
    for(let j = jmin; dir.y>0?j<jmax:j>jmax; j+= 1*dir.y){
  
      let rcb = callback(new Vector2(l,j),array2d[l][j],direction)
      if(rcb != undefined )return
    }
  }
}

export var KeyAutoComplet = function(){
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

export var GENNumberStepInRange = function(min,max,range){
  let r = []
  let step = (max-min)/range
  for(let i=1;i<range;i++){
    r.push(min+step*i)
  }
  return r
}

