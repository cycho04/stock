import { combineReducers } from 'redux';
import companyInfoReducer from './companyInfoReducer';
import quoteInfoReducer from './quoteInfoReducer';
import financialInfoReducer from './financialInfoReducer';
import newsReducer from './newsReducer';
import imageReducer from './imageReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    company: companyInfoReducer,
    quote: quoteInfoReducer,
    financial: financialInfoReducer,
    news: newsReducer,
    images: imageReducer,
    form: formReducer
});