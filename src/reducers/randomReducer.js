import { RANDOM } from '../actions/types';

export default (state = [], action) => {
    switch(action.type){
        case RANDOM:
            return action.payload;
        default:
            return state;
    }
}