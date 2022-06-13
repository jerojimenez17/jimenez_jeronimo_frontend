import { type } from "os";
import { act } from "react-dom/test-utils";
import AuthState from '../models/AuthState';
import {reducerCases} from '../utils/reducerCases';

export const initialState:AuthState = {
    token: null,
};
type AuthAction = 
    | {type: 'SET_TOKEN', token:string}
    | {type: 'REMOVE_TOKEN',token:string};

const reducer =(state: AuthState,action:AuthAction):AuthState=>{
    switch(action.type){
        case reducerCases.SET_TOKEN:{
            return {
                ...state,
                token:action.token
            }
        }
        case reducerCases.REMOVE_TOKEN:{
            return {
                ...state,
                token:null
            }
        }
        default:
            return state;
    }
};

export default reducer;