export class BoombRES{
    
    constructor(){
        this.res = ["./res/boomb.png"]
        this.onload = null
        this.spriteBoomb = new Image()
    }
    
    Start(){
        this.spriteBoomb.onload = (e => {
            this.onload(this.spriteBoomb)
        })
        
        this.res.forEach(e=>this.spriteBoomb.src = e)
    }
}