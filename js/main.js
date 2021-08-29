import { TouchControler } from "./Input/Touches.js"
import { ArrayMap } from "./System/ArrayMap.js"
import { Executable } from "./System/Executable.js"
import { Camera } from "./System/Graphics/Camera.js"
import { ResourceData, Resources } from "./System/Graphics/Resources.js"


Camera.Ready(()=>{
    canvas = Camera.CreateCanvas(640,480,".app")
    canvas.width = "640px"
    canvas.height = "480px"
    /**@type {CanvasRenderingContext2D} */
    ctx = canvas.getContext('2d')
    background("#afafaf")
    
    var r =new Resources()
    // .add(new ResourceData("Image","/res/img/boomb.png"))
    .add(new ResourceData("Image","/res/img/img_01.jpg"))
    // .add(new ResourceData("Image","/res/img/Picked.png"))
    //r.load()
    r.on('update',(d,i)=>{
    console.log(d.curentProgress);
    })
    r.on('end',(d,i)=>{
    r.forEach(ff)
    })
})

function ff(el){
    
    console.log(el.data);
    if(el.isLoaded){
        document.body.append(el.data)
        console.log("ends",el.id,window.ctx);
        window.ctx.fillRect(0,0,100,100)
        window.ctx.drawImage(el.data,0,0)
    }
    
}
