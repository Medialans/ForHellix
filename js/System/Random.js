import Vector2 from "../Vector/Vector2.js"
export default class Random{
    _maxInt = 0x80000000
    _seedOffset = 27101998
    get Seed(){
      return this._seed
    }
    constructor(seed){
      this.seed = seed?seed:Math.floor(Math.random()*(this._maxInt-1))
      this._seed = seed
    }
    /**@returns {number} 0,0.1,...,1 */
    next(){
        this.seed = ((this._seedOffset*this.seed)%this._maxInt)
        return this.seed / this._maxInt
    }
    /**@returns {number} */
    nextRange(min,max){
      let range = max-min
      let next = this.next() * range
      return min + Math.floor(next)
    }
    nextVector2(min = Vector2.Zero,max = Vector2.Any){
      return new Vector2(this.nextRange(min.x,max.x),this.nextRange(min.y,max.y))
    }
  }