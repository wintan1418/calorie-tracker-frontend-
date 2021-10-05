import React, {useState} from "react";
import {CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import '../../circle.css';

const AssessmentForm = ({ measure }) => {
  const [cirValue, setcircleValue] = useState(0);
  
  const setMeasureValue = (e) => {
    setcircleValue(parseFloat(e.target.value).toFixed(1))
  };

  return (
    <div>
      <CircularProgressbar value={cirValue} maxValue={9} text={`${cirValue}`} />
      <div className="tooltip">
        <span className="tooltiptext">Valid only for decimals between 0.0 and 9.0</span>
        <label htmlFor={measure}>{measure}</label>
        <input
          type="number"
          step=".1"
          min="0"
          max="9"
          name={measure}
          placeholder="place in your measure"
          required
          onChange={(e) => setMeasureValue(e)}
        />
      </div>
    </div>
  );
};

export default AssessmentForm;

AssessmentForm.propTypes = {
  measure: PropTypes.string.isRequired,
};


