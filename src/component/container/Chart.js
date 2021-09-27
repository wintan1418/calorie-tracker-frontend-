import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentUser } from '../../actions/index';
import UnpackLineChart from '../display/UnpackLineChart';

const Chart = ({ readings, currentUser, fetchCurrentUser }) => {
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return currentUser.currentUser !== undefined
    ? <UnpackLineChart readings={readings} currentUser={currentUser.currentUser} />
    : <h2>Loading...</h2>;
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, { fetchCurrentUser })(Chart);
Chart.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
  readings: PropTypes.instanceOf(Object).isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
};
