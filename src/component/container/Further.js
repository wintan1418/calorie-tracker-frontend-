import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCurrentUser } from '../../actions/index';
import UnpackFurther from '../presentation/UnpackMore';

const Further = ({ currentuser, fetchCurrentUser => }) => {
  useEffect (() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);
  
}