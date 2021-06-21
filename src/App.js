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
import Home from './Screen/Home';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Loogin from './Screen/Login/Login';
import Loogin2 from './Screen/Login/Login';

import Forget2 from './Screen/Forget/Forget';
import Singup2 from './Screen/singup2/Singup2';
import Sidebar from './component/sidebar';
import Varification2 from './Screen/Varification/Varificatin';
import Location from './Screen/Location and bank info/location';
import Menu from './Screen/Menu Management/Menu';
import Item from './Screen/Item info/Item';
import Menu2 from './Screen/Menu manegment2/menu';
import MenuC from './Screen/Menu category/MenuC';
import Index from './Screen/Change Password/index'
import Poppins from './Screen/popins/Poppins';
function App(){
  return(
   <div>
     <Provider store={store}> 
   <Router history={history}>
       <Switch> 
            {/* <Route exact render={(props) =>  <Login {...props} />} path="/login" /> */}
            {/* <Route render={(props) =>  <Signup {...props} />} path="/signup" /> */}
            {/* <Route render={(props) =>  <Home {...props} />} path="/home" /> */}
            {/* <Route render={(props) =>  <Varification {...props} />} path="/varification" /> */}
            {/* <Route render={(props) =>  <Forgot {...props} />} path="/forgot" /> */}
           <Route render={(props) =>  <Home {...props} />} path="/home" />
            <Route exact render={(props) =>  <Loogin2 {...props} />} path="/Loogin2" />
            <Route exact render={(props) =>  <Singup2 {...props} />} path="/singup" /> 
            <Route exact render={(props) =>  <Forget2 {...props} />} path="/forget" /> 
            <Route exact render={(props) =>  <Varification2 {...props} />} path="/varification" />
            <Route exact render={(props) =>  <Location {...props} />} path="/Location" />  
            <Route exact render={(props) =>  <Menu {...props} />} path="/Menu" />  
            <Route exact render={(props) =>  <Item {...props} />} path="/Item" />  
            <Route exact render={(props) =>  <Menu2 {...props} />} path="/Menu2" />
            <Route exact render={(props) =>  <MenuC {...props} />} path="/MenuC" />  
            <Route exact render={(props) =>  <Index {...props} />} path="/Index" />  
            <Route exact render={(props) =>  <Poppins {...props} />} path="/" />  
            {/* <Route render={(props) =>  <Sidebar {...props} />} path="/" />  */}

         </Switch>
       </Router>
     </Provider> 
       {/* <Varification /> */}
       {/* <Sidebar />/ */}
    </div>

  )
}

export default App;