import IEX from '../apis/IEX';
import unsplash from '../apis/unsplash';

export const fetchCompanyInfo = (data) => async dispatch => {
    const companyInfo = await IEX.get(`/stock/${data}/company`);
    dispatch({
        type: 'COMPANY_INFO',
        payload: companyInfo.data
    })
};

export const fetchFinancialInfo = (data) => async dispatch => {
    const financialInfo = await IEX.get(`/stock/${data}/financials`);
    dispatch({
        type: 'FINANCIAL_INFO',
        payload: financialInfo.data
    })
};

export const fetchQuoteInfo = (data) => async dispatch => {
    const quoteInfo = await IEX.get(`/stock/${data}/quote`, {
        params: {
            displayPercent: true
        }
    });
    dispatch({
        type: 'QUOTE_INFO',
        payload: quoteInfo.data
    })
};

export const fetchNews = (data) => async dispatch => {
    const newsInfo = await IEX.get(`/stock/${data}/news`);
    dispatch({ 
        type: 'NEWS_INFO', 
        payload: newsInfo.data
    })
}

export const fetchImages = (num) => async dispatch => {
    const images = await unsplash.get('/photos/random', {
        params: {
            query: 'workspace',
            count: num
        }
    })
    dispatch({
        type: 'IMAGES',
        payload: images
    })
};

export const fetchSymbols = (x, y) => async dispatch => {
    await IEX.get('/ref-data/symbols')
    .then((symbols) => dispatch({
        type: 'SYMBOLS',
        payload: symbols
    }))
    .then((symbols) => dispatch({
        type: 'RANDOM',
        payload: symbols.payload.data.length - 1
    }))
    .then((symbols) => dispatch({
        type: 'RANDOM_NUMBERS',
        payload: y(symbols.payload)
    }))
    //dispatches a second action, insteadof its own action creator to prevent over fetching. else times out.
}

export const fetchChartInfo = symbol => async dispatch => {
    const chartInfo = await IEX.get(`/stock/${symbol}/chart/1m`);
    dispatch({ 
        type: 'CHART',
        payload: chartInfo.data
    })
}


