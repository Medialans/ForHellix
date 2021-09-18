import { Rect, Vector2 } from "./Vector"

export class ColisionLine{
    /**
     * @param {Rect} l1 
     * @param {Rect} l2 
     * @returns {number} denominator
     */
    lineDenominator(l1,l2){
        return (l1.x-l1.w)*(l2.y-l2.h)-(l1.y-l1.h)*(l2.x-l2.w)
    
    }
    /**
     * @param {Rect} l1 
     * @param {Rect} l2 
     * @param {null|number} denominator dacai null atunci singur afla denominatorul
     * @returns {Vector2}
     */
    lineIsIntersected(l1,l2,denominator = null){
        let d = denominator ? denominator: lineDenominator(l1,l2)
        // var t = ((l1.x-l2.x)*(l2.y-l2.h)-(l1.y-l2.y)*(l2.x-l2.w))/d
        var u = ((l1.w-l1.x)*(l1.y-l2.y)-(l1.h-l1.y)*(l1.x-l2.x))/d
        return (u>=0&&u<=1)
    }
    /**
     * @param {Rect} l1 
     * @param {Rect} l2 
     * @returns {Vector2}
     */
    lineIntersect(l1,l2){
        //daca liniile sunt paralele sau indentice d = 0
        let d = this.lineDenominator(l1,l2)
        //unde se intersecteaza x,y
        let x = ((l1.x*l1.h-l1.y*l1.w)*(l2.x-l2.w)-(l1.x-l1.w)*(l2.x*l2.h-l2.y*l2.w))/d
        let y = ((l1.x*l1.h-l1.y*l1.w)*(l2.y-l2.h)-(l1.y-l1.h)*(l2.x*l2.h-l2.y*l2.w))/d
        
        return new Vector2(x,y)
  }
}