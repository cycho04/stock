//needed for initialization, when the data isn't fetched yet, but we try to access company.symbol in StockDetails.js. Else throws err.
const INITIAL_STATE = [
    {
        datetime: '...',
        headline: '...',
        source: '...',
        url: '...',
        summary: '...',
        related: '...',
        image: '...'
    }
]

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'NEWS_INFO':
            return action.payload;
        default:
            return state;
    }
}