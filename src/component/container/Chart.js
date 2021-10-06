import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentUser } from '../../action/index';
import TrackLineChart from '../display/TrackLineChart';

const Chart = ({ readings, currentUser, fetchCurrentUser }) => {
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);
  console.log(currentUser, currentUser.currentUser)

  return currentUser !== undefined
    ? <TrackLineChart readings={readings} currentUser={currentUser} />
    : <h3 className="wait">Buffering...</h3>;
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
