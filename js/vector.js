class Vector2{
  x = 0
  y = 0
  constructor(x=0,y=0){
    this.x=x,this.y=y
  }
}

/**
 * @param {Vector2} vec
 * @param {"+"|"-"|"*"|"/"|"%"|"**"|"floor"|"round"|"cell"} mat*/
Vector2.prototype.math = function(mat="+",vec){
  let x,y;
  
  switch(mat){
    case "+": 
      x = this.x+vec.x;
      y = this.y+vec.y;break;
    case "-": 
      x = this.x-vec.x;
      y = this.y-vec.y;break;
    case "*": 
      x = this.x*vec.x;
      y = this.y*vec.y;break;
    case "/": 
      x = this.x/vec.x;
      y = this.y/vec.y;break;
    case "%": 
      x = this.x%vec.x;
      y = this.y%vec.y;break;
    case "**": 
      x = this.x**vec.x;
      y = this.y**vec.y;break;
    case "floor": 
      x = Math.floor(this.x);
      y = Math.floor(this.y);break;
    case "round":
      x = Math.round(this.x);
      y = Math.round(this.y);break;
    case "cell":
      x = Math.ceil(this.x);
      y = Math.ceil(this.y);break;
    default:
      x = this.x;
      y = this.y;
  }
  return new Vector2(x,y)
}

/**
 * @param {Vector2} vec
 * @param {"<"|">"|"=="|"!="|"<="|">="} condition 
 * @param {boolean} uniqe true: atunci x si y se controleaza aparte false: daca x si y inpreuna
 */
Vector2.prototype.bool = function(vec,condition,uniq = true){
  let cnd = condition.match(/(\==|!=|<=|\>=|\<|\>)/);
  if(cnd?.length !=2)return
  
  cnd = cnd[1]
  
  if(!(vec instanceof Vector2))return
  
  let fn = new Function(
    ` return {x:(${vec.x}${cnd}${this.x}),y:(${vec.y}${cnd}${this.y})}`)()
  

  if(uniq)
    return fn
    
  return new Function(
    `return ${fn.x}&&${fn.y}`
    )()
}
Vector2.prototype.distance = function(vec){
  return Math.atan2(this.y-vec.y,this.x-vec.x)
}
/**
 * @param {Vector2} distance in ce radius trebue sa corespunda x,y*/
Vector2.prototype.normalize = function(distance = new Vector2(1,1)){
  let {x,y} = distance
  
  return new Vector2(
    this.x>x?x:this.x<-x?-x:this.x,
    this.y>y?y:this.y<-y?-y:this.y
  )
}

Vector2.prototype.normalizeByStep = function(step = 1){
  let vecStep = this.math("*",new Vector2(step,step))
  return vecStep.normalize()
}