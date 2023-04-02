
import {types} from "./types";

export  const Plus = (plus) => {
    return {
        type: types.PLUS,
        payload: plus
    }
}

export  const Minus = (minus) => {
    return {
        type: types.MINUS,
        payload: minus
    }
}
export  const Multiply = (multiply) => {
    return {
        type: types.UMN,
        payload: multiply
    }
}


export  const Division = (division) => {
    return {
        type: types.DEL,
        payload: division
    }
}