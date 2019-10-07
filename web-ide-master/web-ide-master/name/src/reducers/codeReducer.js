import {SAVE_OUTPUT} from '../actions/types';

const initialState={
    code :false,
    output:'Your Output '
}

export default function(state=initialState,action){
    switch(action.type){
        case SAVE_OUTPUT:return{
            ...state,
            output:action.payload
        }
        default:
           return state;
    }
}