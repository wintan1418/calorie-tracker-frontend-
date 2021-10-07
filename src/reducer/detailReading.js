import { FETCH_DETAIL_READINGS } from '../action/categories';

const detailReadingReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DETAIL_READINGS:
      return action.payload;
    default:
      return state;
  }
};
export default detailReadingReducer;
