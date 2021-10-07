import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import LogIn from '../component/display/login';

it ('renders accurately', ()=> {
  const tree = renderer.create(
    <BrowserRouter>
    <LogIn/>
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});