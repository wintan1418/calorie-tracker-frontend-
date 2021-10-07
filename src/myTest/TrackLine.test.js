import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import TrackLineChart from '../component/display/TrackLineChart';

it('renders accurately', () => {
  const readings = [];
  const currentUser = {};

  const tree = renderer.create(
    <BrowserRouter>
      <TrackLineChart currentUser={currentUser} readings={readings} />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
