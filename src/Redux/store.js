import { legacy_createStore as creteStore } from 'redux';
import rootReducer from './Reducers/index';

const store = creteStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;