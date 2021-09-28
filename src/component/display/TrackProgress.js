import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import MyChart from '../container/Chart';

const TrackProgress = ({ readings }) => {
  const currentMeasures = readings[readings.length - 1];
  return (
    <div>
      <Navbar title="Progress" />
      <main>
        <h3 className="g-title">Judge your progress.</h3>
        <MyChart readings={readings} />
        <div className="g-description">
          <div>Blue - actual data</div>
          <div>Red - planned data</div>
        </div>