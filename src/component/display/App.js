import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import LogIn from './login';
import Register from './Register';
import Assesment from './Assesment';
import Tracker from '../container/Tracker';
import TrackDetail from '../container/Trackersum';
import Progress from '../container/Progress';
import Further from '../container/Further';
import Error from './Error';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/log_in" component={LogIn} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Assesment" component={Assesment} />
        <Route exact path="/tracker" component={Tracker} />
        <Route exact path="/tracker/:id" component={TrackDetail} />
        <Route exact path="/progress" component={Progress} />
        <Route exact path="/further" component={Further} />
        <Route exact path="/" component={LogIn} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
