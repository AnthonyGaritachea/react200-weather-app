import { combineReducers } from 'redux';
import searchReducer from './components/SearchField/searchReducers.js';

const rootReducer = combineReducers({
     search: searchReducer  // search displays in the redux dev tools
});

export default rootReducer;