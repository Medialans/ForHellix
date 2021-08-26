export class Animation{
  DellayNull = -1
  DellayZero = 0
  AnimationFunction = 0
  AnimationProperty = 1
  AnimationNull = -1
  AnimationPlayLeft = -1
  AnimationPlayRight = 1
  
  get CurentFrame(){
    return this._curentFrame
  }
  constructor(){
    /**In ce directie se reda animatia*/
    this._directionPlay = this.AnimationPlayRight
    /**Toate cadrele
    * @type {{key,index,dellay}}
    */
    this._keys = []
    /**Keya curenta*/
    this._curentKey = null
    /**Numarul la key unde se afla pe x*/
    this._curentKeyNr = 0
    /**Cite update va fi keya curenta*/
    this._curentKeyDellay = this.DellayNull
    /**Ce animam: function|any dacai functie se chiama la fiecare update*/
    this._animationType = this.AnimationNull
  }
  /**Adaugam key (cadrele) in animatie
  * @param {function|any} key cadrul care il adaugam
  * @param {number} keyIndex pe ce pozitie se va afla
  * @param {number} keyDellay cite cadre/update va fi acest key
  */
  addKeyFrame(key,keyIndex = null,keyDellay=0){
    //initializam ce tip de animatie functie sau any
    if(this._animationType == this.AnimationNull)
      this._animationType = typeof callback == "function"?this.AnimationFunction:this.AnimationProperty
    //controlam daca indexul este null adaugam key la sfirsit
    if(!keyIndex)
      this._keys.push({
        key,keyIndex,keyDellay})
    else
      this._keys[keyIndex] = {callback,keyIndex,dellay}
  }
  
  update(){
    let clbk = this._callback[this._curentFrameNr]
    if(!clbk) return
    if(this._dellay == this.DellayNull)
      this._dellay = clbk.dellay
    
    this._curentFrame = clbk
    if(this._animationType == this.AnimationFunction)
    clbk.callback()
    
    if(this._dellay>this.DellayZero){
      this._dellay--;
    }else{
      this._dellay = this.DellayNull
      this._curentFrameNr= this._curentFrameNr>this._callback.length-2?0:this._curentFrameNr+1
    }
      
  }
}