/**@type {null|undefined|HTMLCanvasElement} */
var canvas;
/**@type {null|undefined|CanvasRenderingContext2D} */
var ctx;
/**@type {null|undefined|string} */
var backgroundColor;
const defaultColor = "#000"
const defaultBackgroundColor = "#fff"

/**
 * @param {number|string} r 0|255 | "#fff"
 * @param {number} g 0|255
 * @param {number} b 0|255
 */
function getColor(r,g,b){
    if(!ctx)return

    if(typeof r == 'string'){
        return r
    }
    g = g?g:r
    b = b?b:r

    return `rgb(${r},${g},${b})`
}
/**
 * @param {number|string} r 0|255 | "#fff"
 * @param {number} g 0|255
 * @param {number} b 0|255
 */
function background(r,g,b){
    ctx.fillStyle = arguments.length==0?defaultBackgroundColor:getColor(r,g,b)
    ctx.fillRect(0,0,canvas.width,canvas.height)
    backgroundColor = ctx.fillStyle
}
function color(r,g,b){
    ctx.fillStyle=arguments.length==0?defaultColor:getColor(r,g,b)
}
function strokeColor(r,g,b){
    ctx.strokeStyle = arguments.length==0?defaultColor:getColor(r,g,b)
}
function line(x1,y1,x2,y2){
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()
}
function stroke(){
    ctx.stroke()
}
function StartPath(){
    ctx.StartPath()
}
function EndPath(){
    ctx.EndPath()
}
function clear(x,y,w,h){
    if(arguments.length != 4){
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0,0,canvas.width,canvas.height)
        return ctx
    }
    ctx.clearRect(x,y,w,h)
}