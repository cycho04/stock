import IEX from '../apis/IEX';

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