import React from "react";
import {cirularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import '../../circle-styling.css';

const AssessmentForm = ({ measure }) => {
  const [cirValue, setcircleValue] = useState(0);
  
  const setMeasureValue = (e) => {
    setcircleValue(parseFloat(e.target.value).toFixed(1))
  }
}
