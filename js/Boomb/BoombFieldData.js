import {Vector2,Rect,Transform} from './../Vectors/Vector.js'
import {BoombCell} from './BoombCell.js'
import {Create2DArray} from "../FArray.js"
/**
 * Informatia despre boomb field*/
export class  BoombFieldData extends Transform {
    
    constructor() {
        super()
        this.x = 20
        this.y = 40
        this.w = 350
        this.h = 350
         /**cite patrate si marimea lor
          * @type {Rect}
          */
         this.cellRect = new Rect(12,12,16,16)
         /**cite bobe sunt in field
          * @type {number}
          */
         this.mineOnField = 12
         /**cite bombe mai sunt
          * @type {number}
          */
         this.curentMineOnField = 3
         //ce patrat este activ
         this.activeCell = this.addChild(new Transform(-1,-1,-1,-1))
         //informatia despre patratele,bombele
         /**@type {BoombCell[][]}*/
         this.matrix = []
         /**@type{BoombCell[]}*/
         this.cells = []
         /**@type{BoombCell[]}*/
         this.boombs = []

    }
    /**
     * Cind scimbam marimea fieldului
     * @param {Vector2} marimea noua*/
    Resize(){
        if ((this.cellRect.w + this.cellRect.h) != 0)
            this.Size = new Vector2(this.cellRect.x * this.cellRect.w, this.cellRect.y * this.cellRect.h)
        else
            this.Size = Rect.FixLocationOnVector(this.Size, this.cellRect.Location)
    }
    /**
     * optinem ce se afla pe field x,y nu intoarcem null ... CellData.IsNull = true
     * @param {Vector2} position
     * @returns{BoomCell}}
     */
    GetCellData(position) {
        //daca esim din masiv de date intorcem cellData.IsNull true
        if (
            position.x < 0 || 
            position.x >= this.matrix.length || 
            position.y < 0 || 
            position.y >= this.matrix[position.x].length) {
                return new BoombCell(this).set({isNull:true})
        }
        return this.matrix[position.x][position.y]
    }
    /**generam field matrix
    */
    generateGame() {
        this.cells = []
        let i =0;
        this.matrix = Create2DArray(this.cellRect.Location,(location) => {
            let v = new BoombCell(this)
            v.Location = location
            this.addChild(v)
            this.cells[i]=v
            i++
            return v
        })
        this.generateBoomb()
    }
    generateBoomb(){
        this.boombs = []
        for(let i=0; i<this.mineOnField; i++){
            let eid = Math.floor(Math.random()*this.cells.length)
            console.log(eid);
            this.boombs.push(this.cells[eid])
            this.boombs[i].IsBoomb = true
        }
    }
    
}