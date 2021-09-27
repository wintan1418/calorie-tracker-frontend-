import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Assesment from './Assesment';
import Track from '../container/Track';
import TrackSum from '../container/TrackSum';
import Progress from '../container/Progress';
import further from '../container/Further';
import Error from './Error';
import Further from '../container/Further';

function App() {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/sign_up" component={SignUp} />
      <Route exact path="/Assesment" component={Assesment} />
      <Route exact path="/track" component={Track} />
      <Route exact path="/track/:id" component={TrackSum} />
      <Route exact path="/progress" component={Progress} />
      <Route exact path="/further" component={Further} />
      <Route component={Error} />
    </Switch>
    </BrowserRouter>
  )
}