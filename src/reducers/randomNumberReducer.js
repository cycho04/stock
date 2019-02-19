export default (state = [], action) => {
    switch(action.type){
        case 'RANDOM_NUMBERS':
            return [...state, action.payload ];
        default:
            return state;
    }
}