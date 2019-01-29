import { combineReducers } from 'redux';
import companyInfoReducer from './companyInfoReducer';
import quoteInfoReducer from './quoteInfoReducer';
import financialInfoReducer from './financialInfoReducer';
import newsReducer from './newsReducer';
import imageReducer from './imageReducer';

export default combineReducers({
    company: companyInfoReducer,
    quote: quoteInfoReducer,
    financial: financialInfoReducer,
    news: newsReducer,
    images: imageReducer
});