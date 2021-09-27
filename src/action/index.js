import {
  FETCH_READINGS,
  FETCH_DETAIL_READINGS,
  FETCH_CURRENT_USER,
} from './types';

const fetchReadings =() => (dispatch) => {
  const abortCont = new AbortController();
  const url = 'heroku';
  const token = sessionStorage.getItem('token')
  fetch(url, {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch({
      type: FETCH_READINGS,
      payload: data,

    }));
};