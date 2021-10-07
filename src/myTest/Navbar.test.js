 import React from 'react';
 import renderer from 'react-test-renderer';
 import Navbar from '../component/display/Navbar';

 it('renders accurately', () => {
   const tree = renderer.create(<Navbar title="more"/>).toJSON();
   expect(tree).toMatchSnapshot();

 });