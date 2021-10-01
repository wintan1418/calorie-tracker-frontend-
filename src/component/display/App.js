import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import LogIn from './login';
import SignUp from './Register';
import Assesment from './Assesment';
import Tracker from '../container/Tracker';
import TrackDetail from '../container/Trackersum';
import Progress from '../container/Progress';
import Further from '../container/Further';
import Error from './Error';



function App() {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/log_in" component={LogIn} />
      <Route exact path="/sign_up" component={SignUp} />
      <Route exact path="/Assesment" component={Assesment} />
      <Route exact path="/track" component={Tracker} />
      <Route exact path="/track/:id" component={TrackDetail} />
      <Route exact path="/progress" component={Progress} />
      <Route exact path="/further" component={Further} />
      <Route component={Error} />
    </Switch>
    </BrowserRouter>
  )
}
export default App;