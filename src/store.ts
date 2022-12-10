import { createStore } from 'redux';
import combineReducers from './reducers/indexReducer';


const initialState = {};

const store = createStore(
    combineReducers,
  initialState,
);

export default store;

