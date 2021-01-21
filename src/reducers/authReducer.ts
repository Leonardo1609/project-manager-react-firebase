import { ActionAuthReducerInterface } from "../interfaces/interfaces";
import { types } from "../types";

export const authReducer = ( state = {}, action: ActionAuthReducerInterface ) => {
    switch( action.type ){
        case types.login:
            return {
                uid: action.payload.uid,
                username: action.payload.username
             }
        case types.logout:
            return {}
        default:
            return state;
    }
}