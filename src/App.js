import React from 'react';
import Signup from './Screen/singup'
import Login from './Screen/login'
import Forgot from './Screen/forget'
import Home from './Screen/Home';
import Location from './Screen/location and bank info/location'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './config/history'
import Varification from '../src/Screen/verification'

import { Provider } from 'react-redux';
import store from './Redux/Store';
import Menu from './Screen/menu management/menu';

import Sidebar from '../src/component/sidebar'
import Iteminfo from './Screen/iteminfo/item';
import Menusecond from './Screen/menu management 2/menusecond';
import Catogry from './Screen/add catogry/Catogry';
import NewPass from './Screen/choose passward/newpass';
import Poppins from './Screen/poppins';

function App(){
  return(
    <div>
   
   
      <Provider store={store}>
     <Router history={history}>
         <Switch>
            <Route exact render={(props) =>  <Login {...props} />} path="/login" />
            <Route exact render={(props) =>  <Poppins {...props} />} path="/" />
            <Route render={(props) =>  <Signup {...props} />} path="/signup" />
            <Route render={(props) =>  <Home {...props} />} path="/home" /> 
             <Route render={(props) =>  <Varification {...props} />} path="/varification" /> 
           <Route render={(props) =>  <Forgot {...props} />} path="/forgot" />
           <Route render={(props) =>  <Home {...props} />} path="/home" />
           <Route render={(props) =>  <Location {...props} />} path="/location" />
           <Route render={(props) =>  <Menu {...props} />} path="/menu" />
           <Route render={(props) =>  <Iteminfo {...props} />} path="/item" />
           <Route render={(props) =>  <Menusecond {...props} />} path="/Menusecond" />
             <Route render={(props) =>  <Catogry {...props} />} path="/catogry" />
             <Route render={(props) =>  <NewPass {...props} />} path="/newpass" />
         </Switch>
       </Router>
     </Provider>    
     
     
     
   
    

    </div>

  )
}

export default App;