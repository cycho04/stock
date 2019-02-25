export default (state = new Date().toLocaleTimeString(), action) => {
    switch(action.type){
        case('TIME'):
            return action.payload;
        default:
            return state;
    }
}