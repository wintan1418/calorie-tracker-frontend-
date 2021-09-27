import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchreadingss } from '../../actions';
import UnpackProgress from '../presentation/UnpackProgress';

const Progress = ({ fetchreadingss, readingss }) => {
  useEffect(() => {
    fetchreadingss();
  }, [fetchreadingss]);

  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
    return <Redirect to="/log_in" />;
  }
  return readingss.readingss !== undefined
    ? (<UnpackProgress readingss={readingss.readingss} />)
    : <h2>Loading...</h2>;
};
 