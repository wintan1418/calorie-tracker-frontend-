import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import AssesmentForm from '../component/display/AssessmentForm';

it('renders accurately', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <AssesmentForm measure="first" />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
