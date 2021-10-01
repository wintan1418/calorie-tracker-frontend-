import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import baseReducer from './reducer/baseReducer';

const groundState = {
  readings: {},detailReading: {},currentUser: {},
};

const middleware = [thunk];

const store = createStore(
  baseReducer,
  groundState,
  composeWithDevTools(
    applyMiddleware(...middleware),

  ),
);
export default store;