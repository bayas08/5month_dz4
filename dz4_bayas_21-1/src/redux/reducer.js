import {types} from "./types";


const initialState = {
    num: null
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case types.PLUS:
            return {num: action.payload}
        case types.MINUS:
            return {num: action.payload}
        case types.UMN:
            return {num: action.payload}
        case types.DEL:
            return {num: action.payload}
        default: return state
    }
}