import { ArrayMap } from "../ArrayMap.js";
import { Listener } from "../Listener.js";


export class Resources extends ArrayMap{
    _progress = new ResourcesProgress()
    /**
     * @override
     * @param {'start'|'progress'|'end'} listener
     * @param {(data:ResourcesProgress,id:number)=>void} callback 
     */
    on(listener,callback){
        this.listener.on(listener,callback)
    }
    /**Event subscribe "progress"|"end"
     */
    listener = new Listener()

    load(){
        this._progress.maxFile = this.length
        this.forEach((el,i)=>{
            el.id = i
            this._loadImage(el)
        })
    }
    /**
     * @param {ResourceData} imgData
     */
    _loadImage(imgData,i){
        let xhr = new XMLHttpRequest()
        xhr.responseType = 'arraybuffer'
        xhr.open('get',imgData.src,true)
        xhr.onload = (e)=>{
            var blob = new Blob([xhr.response]);
            imgData.data.src = window.URL.createObjectURL(blob)
            this.listener.emit('start',this._progress,i)
        }
        xhr.onprogress = (e)=>{
            this._progress.progress[i] = (e.loaded / e.total) * 100
             this.listener.emit('update',this._progress,i)
        }
        xhr.onloadend = (e)=>{
            this._progress.curentLoaded++
            imgData.isLoaded = true
            this.listener.emit('end',this.progress,i)
        }
        xhr.send()
    }
}
export class ResourcesProgress{
    maxFile = 0
    curentLoaded = 0
    progress = []
    get curentProgress(){
        let d = 0
        for(let el of this.progress){
            d+=el
        }
        return d/(this.maxFile*100)*100
    }
}
export class ResourceData{
    /**
     * @param {IResourcesType} type ce type
     * @param {string} src unde se afla 
     */
    constructor(type,src,id){
        this.type   = type
        this.src    = src
        this.data   = type == "Image"?
                        new Image():type == "File"?new File():null
        this.id = id
        this.isLoaded = false
    }
}

/**@interface*/
export const IResourcesType = ("File"||"Image")
