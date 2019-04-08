import { COMPANY_INFO } from '../actions/types';

const INITIAL_STATE = {
    company:{
        symbol: '...',
        companyName: '...',
        exchange: '...',
        industry: '...',
        website: '...',
        description: '...',
        CEO: '...'    
    }
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case COMPANY_INFO:
            return {...state, company: action.payload};
        default:
            return state;
    }
}