import {
  FETCH_READINGS,
  FETCH_DETAIL_READINGS,
  FETCH_CURRENT_USER,
} from './categories';

const fetchReadings =() => (dispatch) => {
  const abortCont = new AbortController();
  const url = 'https://juwons.herokuapp.com/readings';
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

const fetchDetailReadings = (readingID) => (dispatch) => {
  const abortCont = new AbortController();
  const url = `https://welltrack-api.herokuapp.com/readings/${readingID}`;
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

const fetchCurrentUser = () => (dispatch) => {
  const abortCont = new AbortController();
  const url = 'https://wintan.herokuapp.com/info';
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
  fetchReadings,fetchCurrentUser, fetchDetailReadings,
};