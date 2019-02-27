import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import reducers from './reducers'
import App from './components/App';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducers, enhancer);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);