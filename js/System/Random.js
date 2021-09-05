
export class Random{
    #maxInt = 0x80000000
    #seedOffset = 27101998
    constructor(seed){
      this.seed = seed?seed:Math.floor(Math.random()*(this.#maxInt-1))
    }
    /**@returns {number} 0,0.1,...,1 */
    next(){
        this.seed = ((this.#seedOffset*this.seed)%this.#maxInt)
        return this.seed / this.#maxInt
    }
    /**@returns {number} */
    nextRange(min,max){
      let range = max-min
      let next = this.next() * range
      return min + Math.floor(next)
    }
  }