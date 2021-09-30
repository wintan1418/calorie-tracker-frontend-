import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { fetchReadings, fetchDetailReadings } from '../../action/index';
import Map from '../display/';

const Tracker = ({fetchReadings, fetchDetailReadings, readings}) => {
  useEffect(() => {
    fetchReadings();

  }, [fetchReadings]);
  const clickOnDetailReadings = (e) => {
    fetchDetailReadings(e);
  };

  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
   return <Redirect to="/log_in" />;
}
return readings.readings !== undefined
  ? (<Map readings={readings.readings} clickOnDetailReadings={clickOnDetailReadings} />)
  : <h3>Loading...</h3>;
};

const mapStateToProps = (state) => ({
  readings: state.readings,
})

export default connect(mapStateToProps, { fetchReadings, fetchDetailReadings })(Tracker);

Tracker.propTypes = {
  readingss: PropTypes.instanceOf(Object).isRequired,
  fetchreadingss: PropTypes.func.isRequired,
  fetchDetailreadings: PropTypes.func.isRequired,
};