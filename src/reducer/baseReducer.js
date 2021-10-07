import { combineReducers } from 'redux';
import readingsReducer from './readings';
import currentUserReducer from './currentuser';
import detailReadingReducer from './detailReading';

const baseReducer = combineReducers({
  readings: readingsReducer,
  detailReading: detailReadingReducer,
  currentUser: currentUserReducer,

});

export default baseReducer;
