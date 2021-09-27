import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { fetchReadings, fetchDetailReadings } from '../../actions/index';
import TrackMap from '../display/';

const Track = ({fetchReadings, fetchDetailReadings, readings}) => {
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
  ? (<TraceMap readings={readings.readings} clickOnDetailReadings={clickOnDetailReadings} />)
  : <h3>Loading...</h3>;
};

const mapStateToProps = (state) => ({
  readings: state.readings,
})

export default connect(mapStateToProps, { fetchReadings, fetchDetailReadings })(Track);

Track.propTypes = {
  readingss: PropTypes.instanceOf(Object).isRequired,
  fetchreadingss: PropTypes.func.isRequired,
  fetchDetailreadings: PropTypes.func.isRequired,
};