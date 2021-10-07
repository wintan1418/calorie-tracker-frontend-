import currentUserReducer from "../reducer/currentuser";
 
test('should give the initial state', () => {
  expect(currentUserReducer(undefined, {})).toEqual({});

});
test('Add current user in redux storage', () => {
  const previousState = {
    readings: [],
    detailReadings: {},
    currentUser: {},
  };
  const action = {
    payload: 'FETCH_CURRENT_USER',
    type: 'New user',
  };
  expect(currentUserReducer(previousState, action)).toEqual({
    readings: [],
    detailReadings: {},
    currentUser: 'a new user',
  });
});