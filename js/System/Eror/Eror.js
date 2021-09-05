

export class Errors{
    /**
     * 
     * @param {array} array 
     * @param {object} obj2 
     * @param {string} msg mesaj adaugator 
     */
    static ArrayInstance(array,obj,msg){
        if(array.length!=0)
            if(array[0].constructor.name != obj.constructor.name)
                throw new Error(
                    `Nu se permite de adaugat "${obj.constructor.name}" in masiv de type "${array[0].constructor.name}"`
                    +Errors._msg(msg)
                )
                
    }
    /**Controlam daca index e mai mare decit array.length atunci chemam eroare
     * @param {Array} array 
     * @param {number} index 
     * @param {string} msg mesaj adaugator 
     */
    static ArrayRange = function(array,index,msg){
        if(index>array.length-1)
            throw new Error(
                `Marimea masivului 0->${array.length-1} dar tu ai ales ${index}`
                +Errors._msg(msg)
            )
    }   
    /**
     * @private
     * @param {string} msg 
     * @returns {string}
     */
    static _msg = function(msg){
        return msg?msg:""
    }
}
