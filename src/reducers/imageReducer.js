import { IMAGES } from '../actions/types';

export default (state = [], action) => {
    switch(action.type){
        case IMAGES:
            return action.payload;
        default:
            return state;
    }
}