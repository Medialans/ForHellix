
export class GamepadKeyData{
    static get LT(){return 6}
    static get RT(){return 7}

    static get LB(){return 4}
    static get RB(){return 5}

    static get LA(){return 10}
    static get RA(){return 11}

    static get X(){return 2}
    static get Y(){return 3}
    static get A(){return 0}
    static get B(){return 1}

    static get UP(){return 12}
    static get Down(){return 13}
    static get Left(){return 14}
    static get Right(){return 15}

    
    static get SELECT(){return 8}
    static get START(){return 9}
    static get HOME(){return 16}
    
    
    static get AXIS_LEFT_X(){return 0}
    static get AXIS_LEFT_Y(){return 1}
    
    static get AXIS_RIGHT_X(){return 2}
    static get AXIS_RIGHT_Y(){return 3}
}

export class GamepadInput{



    /**
     * @param {number} gamepadIndex indexul la gamepad
     * @param {number} keyData indexul la keye poti afla in class [GamepadKeyData.Any]
     * @returns {boolean}*/
    static IsPressed(gamepadIndex,keyData){
        let gp = navigator.getGamepads()[gamepadIndex]
        return gp ? keyData > gp.buttons.length? false : gp.buttons[keyData].pressed : false
    }

}