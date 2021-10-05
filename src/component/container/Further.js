import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCurrentUser } from '../../action/index';
import TrackFurther from '../display/TrackFurther';

const Further = ({ currentUser, fetchCurrentUser }) => {
  useEffect (() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);
  
  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token')=== null) {
    return <Redirect to="/login" />;
  }
  return currentUser !== undefined
  ? <TrackFurther currentUser={currentUser} />
  : <h3>Loading...</h3>;
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, { fetchCurrentUser })(Further);

Further.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
};
