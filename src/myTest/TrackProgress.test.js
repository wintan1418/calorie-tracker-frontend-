import React from "react";
import { Provider } from "react";
import renderer, {act} from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import store from '../reduxStore';
import TrackProgress from "../component/display/TrackProgress";

it('renders correctly', () => {
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