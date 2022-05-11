import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Assesment from '../component/display/Assesment';

it('renders accurately', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Assesment />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
