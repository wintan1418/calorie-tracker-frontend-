 import React from 'react';
 import renderer from 'react-test-renderer';
 import Navbar from '../component/display';

 it('renders accurately', () => {
   const tree = renderer.create(<Navbar title="more"/>).toJson();
   expect(tree).toMatchSnapshot();

 });