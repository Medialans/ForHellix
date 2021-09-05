
class Rect{
  get location(){return new Vector2(this.x,this.y)}
  set location(val){this.x=val.x,this.y=val.y}
  get size(){return new Vector2(this.w,this.h)}
  set size(val){this.w=val.x,this.h=val.y}
  
  constructor(x=0,y=0,w=20,h=20){
    this.x=x,this.y=y,this.w=w,this.h=h
  }
}
Rect.prototype.isInside = function(vec){
  return (vec.x>this.loc.x&&vec.x<this.siz.x&&vec.y>this.loc.y&&vec.y<this.siz.y)
}

