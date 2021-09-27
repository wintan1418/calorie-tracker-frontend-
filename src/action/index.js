import {
  FETCH_READINGS,
  FETCH_DETAIL_READINGS,
  FETCH_CURRENT_USER,
} from './types';

const fetchReadings =() => (dispatch) => {
  const abortCont = new AbortController();
  const url = 'heroku';
  const token = sessionStorage.getItem('token')
}