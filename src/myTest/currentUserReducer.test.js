import currentUserReducer from '../reducer/currentuser';

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
    type: 'a new user',
    payload: 'FETCH_CURRENT_USER',
  };
  expect(currentUserReducer(previousState, action)).toEqual({
    readings: [],
    detailReadings: {},
    currentUser: {},
  });
});
