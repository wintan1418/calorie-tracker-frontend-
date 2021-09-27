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

    return () => abortCont.abort();
};

const fetchDetailReading = (readingID) => (dispatch) => {
  const abortCont = new AbortController();
  const url = `heroku${readingID}`;
  const token = sessionStorage.getItem('token');
  fetch(url, {
    headers: {
      Authorization: token,
    },
  })

    .then((res) => res.json())
    .then((data) => dispatch({
      type: FETCH_DETAIL_READINGS,
        payload: data,

    }));
     return() => abortCont.abort();
};

const fetchCurrentUser = (readingID) => (dispatch) => {
  const abortCont = new AbortController();
  const url = `heroku${readingID}`;
  const token = sessionStorage.getItem('token');
  fetch(url, {
    headers: {
      Authorization: token,
    },
  })

    .then((res) => res.json())
    .then((data) => dispatch({
      type: FETCH_CURRENT_USER,
        payload: data,

    }));
     return() => abortCont.abort();
};

export {
  fetchReadings,
  fetchCurrentUser,
  fetchDetailReading,
};