export default (state = [], action) => {
    switch(action.type){
        case 'RANDOM':
            return [...state, action.payload ];
        default:
            return state;
    }
}