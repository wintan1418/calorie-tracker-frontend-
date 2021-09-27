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
  
};
