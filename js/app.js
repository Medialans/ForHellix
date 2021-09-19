let cellCount = new Vector2(61,6)
let cellSize  = new Vector2(60,60)
let fieldSize = cellCount.math("*",cellSize)
let rnd = new Random(1998)
let startCellCount = 36
//init map
let map = {
  style:{
    width:fieldSize.x+"px"
  }
}
//generate elements
let elements = []
for(var i=0;i<cellCount.x*cellCount.y;i++){
  let el = {
    num:0,
    style:{
      width:cellSize.x+"px",
      height:cellSize.y+"px"
    }
  }
  elements.push(el)
}

console.time()
//generate 2 number
var rndelnun = rnd.nextRangeCount(0,elements.length-1,startCellCount)

console.log(rndelnun);
console.timeEnd()
var study = new Vue({
  el: "#vue-app",
  data: {
    map,
    elements,
    cellSize,
    cellCount,
    fieldSize
  }
});


var touch = new InputTouch()