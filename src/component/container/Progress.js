import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchReadings } from '../../action/index';
import UnpackProgress from '../display/TrackProgress';

const Progress = ({ fetchReadings, readings }) => {
  useEffect(() => {
    fetchReadings();
  }, [fetchReadings]);

  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
    return <Redirect to="/log_in" />;
  }
  return readings.readings !== undefined
    ? (<UnpackProgress readings={readings.readings} />)
    : <h2>Loading...</h2>;
};
const mapStateToProps = (state) => ({
  readings: state.readings,
});

export default connect(mapStateToProps, { fetchReadings })(Progress);

Progress.propTypes = {
  readings: PropTypes.instanceOf(Object).isRequired,
  fetchReadings: PropTypes.func.isRequired,
};

 