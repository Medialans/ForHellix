class Random {
  _maxInt = 0x80000000
  _seedOffset = 27101998
  constructor(seed) {
    this.seed = seed ? seed : Math.floor(Math.random() * (this._maxInt - 1))
  }
  /**@returns {number} 0,0.1,...,1 */
  next() {
    this.seed = ((this._seedOffset * this.seed) % this._maxInt)
    return this.seed / this._maxInt
  }
  /**@returns {number} */
  nextRange(min, max) {
    let range = max - min
    let next = this.next() * range
    return min + Math.floor(next)
  }
  /**@returns {number[]}*/
  nextRangeCount(min,max,count){
    let ds = Math.abs(max-min)+1
    if(count>ds)
      throw new Error("count este mai mare decit trebue")
    
    let nr = []
    for(let i=0; i<count; i++){
      let rnd = this.nextRange(min,max)
      
      while (true) {
        let exist = false
        
        for(let enr of nr){
          if(enr==rnd){
            exist = true
            break;
          }
        }
        
        if(!exist)break;
        
        rnd = min+((rnd+1)%max)
      }
      nr.push(rnd)
    }
    
    return nr
  }
  
}

