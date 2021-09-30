import React from 'react';
import { Chart } from 'react-charts';
import PropTypes from 'prop-types';

const UnpackLineChart = ({ readings, currentUser }) => {
  function defChartData(readings) {
    const arr = [];
    readings.map((res) => {
      arr.push([readings.indexOf(res) + 1, parseFloat(res.overall_score)]);
      return arr;
    });

    const output = {
      label: 'Series 1',
      data: arr,
    };

    return output;
  }

  function defPlannedChartData() {
    const proposedMeasure = parseFloat(currentUser.level_plan);
    const presentMeasure = parseFloat(currentUser.level_initial);
    const diffScore = proposedMeasure - presentMeasure;

    const executionPeriod = 30;

    const requiredDailyProgress = diffScore / executionPeriod;

    const arr = [[0, presentMeasure]];
    let current = presentMeasure;
    for (let i = 1; i <= executionPeriod; i += 1) {
      arr.push([i, current += requiredDailyProgress]);
    }

    const output = {
      label: 'Series 3',
      data: arr,
    };

    return output;
  }

  const data = React.useMemo(
    () => [
      defChartData(readings),
      defPlannedChartData(),
    ],
    [readings],
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    [],
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div className="graph">
      <Chart data={data} axes={axes} />
    </div>
  );
  return lineChart;
};

export default UnpackLineChart;

UnpackLineChart.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
};
