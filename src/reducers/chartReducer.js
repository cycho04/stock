export default (state=[], action) => {
    switch(action.type){
        case('CHART'):
            return action.payload;
        default:
            return state;
    }
}