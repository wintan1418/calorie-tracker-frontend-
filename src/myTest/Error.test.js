import React from 'react';
import renderer from 'react-test-renderer';
import Error from '../component/display/Error';

it ('renders accurately', () => {
  const tree = renderer.create(<Error />).toJSON();
  expect(tree).toMatchSnapshot();
}

)
