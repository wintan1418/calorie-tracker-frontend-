import React from 'react';
import { Chart } from 'react-charts';
import PropTypes from 'prop-types';

const TrackLineChart = ({ readings, currentUser }) => {
  function defChartData(readings) {
    const arr = [];
    readings.map((res) => {
      arr.push([readings.indexOf(res) + 1, parseFloat(res.overall_measure)]);
      return arr;
    });

    const output = {
      label: 'Series 1',
      data: arr,
    };

    return output;
  }

  function defPlannedChartData() {
    const proposedMeasure = parseFloat(currentUser.present_measure);
    const presentMeasure = parseFloat(currentUser.proposed_measure);
    const diffMeasure = proposedMeasure - presentMeasure;

    const executionPeriod = 15;

    const requiredDailyMeasure = diffMeasure / executionPeriod;

    const arr = [[0, presentMeasure]];
    let current = presentMeasure;
    for (let i = 1; i <= executionPeriod; i += 1) {
      arr.push([i, current += requiredDailyMeasure]);
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

    <div className="graph">
      <Chart data={data} axes={axes} />
    </div>
  );
  return lineChart;
};

export default TrackLineChart;

TrackLineChart.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
};
