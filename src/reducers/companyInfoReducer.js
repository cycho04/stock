//needed for initialization, when the data isn't fetched yet, but we try to access company.symbol in StockDetails.js. Else throws err.
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
        case('COMPANY_INFO'):
            return {...state, company: action.payload};
        default:
            return state;
    }
}