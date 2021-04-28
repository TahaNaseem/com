import React from 'react';
import Signup from './Screen/singup'
import Login from './Screen/login'
import Forgot from './Screen/forget'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './config/history'
import Varification from '../src/Screen/verification'
function App(){
  return(
    <div>
      <Login />
      {/* <Router history={history}>
         <Switch>
            <Route exact render={(props) =>  <Login {...props} />} path="/" />
            <Route render={(props) =>  <Signup {...props} />} path="/signup" />
            <Route render={(props) =>  <Home {...props} />} path="/home" />
            <Route render={(props) =>  <Varification {...props} />} path="/varification" />
           <Route render={(props) =>  <Forgot {...props} />} path="/forgot" />
           
         </Switch>
       </Router> */}
       {/* <Varification /> */}
    </div>

  )
}

export default App;