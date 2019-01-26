import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // the form key value in the combineReducer has to be exactly as is.

export default combineReducers({
    temp: () => 'temp',
    form: formReducer
})