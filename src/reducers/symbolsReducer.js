export default (state=[], action) => {
    switch(action.type){
        case('SYMBOLS'):
            return {...state, symbols: action.payload};
        default:
            return state;
    }
}