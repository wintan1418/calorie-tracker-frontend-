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

    const arr = [[0, initialScore]];
    let current = initialScore;
    for (let i = 1; i <= executionPeriod; i += 1) {
      arr.push([i, current += requiredDailyProgress]);
    }

    const output = {
      label: 'Series 3',
      data: arr,
    };

    return output;