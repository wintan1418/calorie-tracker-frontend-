import React from "react";
import { Provider } from "react-redux";
import renderer, {act} from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import store from '../reduxStore';
import TrackProgress from "../component/display/TrackProgress";

it('renders accurately', () => {
  const readings = [];
  let tree;
  act(() => {
    tree = renderer.create(
      <Provider store={store}>
        <React.StrictMode>
          <BrowserRouter>
          <TrackProgress readings={readings}/>
        </BrowserRouter>
        </React.StrictMode>
      </Provider>
    ).toJSON();
  });

  expect(tree).toMatchSnapshot();
});