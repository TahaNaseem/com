import React from 'react';
import Signup from './Screen/singup'
import Login from './Screen/login'
import Forgot from './Screen/forget'
import Location from './Screen/location and bank info/location'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './config/history'
import Varification from '../src/Screen/verification'
import Home from './Screen/Home';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Menu from './Screen/menu management/menu';
function App(){
  return(
    <div>
     <Provider store={store}>
     <Router history={history}>
         <Switch>
            <Route exact render={(props) =>  <Login {...props} />} path="/" />
            <Route render={(props) =>  <Signup {...props} />} path="/signup" />
            <Route render={(props) =>  <Home {...props} />} path="/home" />
            <Route render={(props) =>  <Varification {...props} />} path="/varification" />
           <Route render={(props) =>  <Forgot {...props} />} path="/forgot" />
           <Route render={(props) =>  <Home {...props} />} path="/home" />
           <Route render={(props) =>  <Location {...props} />} path="/location" />
           <Route render={(props) =>  <Menu {...props} />} path="/menu" />
         </Switch>
       </Router>
     </Provider> 
     {/* <Menu/> */}

    </div>

  )
}

export default App;