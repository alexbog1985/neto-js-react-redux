import { createStore, combineReducers } from 'redux';
import serviceListReducer from '../reducers/serviceList.js';
import serviceAddReducer from '../reducers/serviceAdd.js';

const rootReducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
});

const store = createStore(rootReducer);

export default store;