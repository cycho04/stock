//needed for initialization, when the data isn't fetched yet, but we try to access company.symbol in StockDetails.js. Else throws err.
const INITIAL_STATE = {
    quote:{
        open: '...',
        close: '...',
        high: '...',
        low: '...',
        latestPrice: '...',
        latestSource: '...',
        latestVolume: '...',
        previousClose: '...',
        change: '...',
        changePercent: '...',
        marketCap: '...',
        peRatio: '...',
        week52High: '...',
        week52Low: '...',
        ytdChange: '...'
    }
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case('QUOTE_INFO'):
            return {...state, quote: action.payload};
        default:
            return state;
    }
}