import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Register from  '../component/display/Register';

it('renders accurately', () => {
  const tree = renderer.create(
    <BrowserRouter>
    <Register />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();

});