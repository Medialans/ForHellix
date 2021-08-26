import {Vector2,Transform} from "../Vectors/Vector.js"
export class BoombCellData extends Transform{

    constructor() {
        super()
        this.field = null
        this.location = new Vector2(-1, -1)
        this.IsBoomb = false
        this.IsClicked = false
        this.AroundBoomb = 0
        this.IsNull = false
    }
}