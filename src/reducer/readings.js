import { FETCH_READINGS } from "../action/categories";

const ReadingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_READINGS:
      return action.payload
       default:
         return state;
  }
};
export default ReadingsReducer