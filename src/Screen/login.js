import React, { useState } from 'react';
import './login.css';
import email from '../component/assets/email.png'
import pass from '../component/assets/passward.png'
import ova from '../component/assets/oval1.png'
import { NavLink } from 'react-router-dom';
import fire from '../fire'
import { useHistory } from 'react-router-dom'
import  Home  from '../Screen/Home/index'
import { LoginAction } from '../Redux/Action/userAction'
import { connect } from 'react-redux';


function Login({LoginAction, user, loading}) {
  let history = useHistory()
  const [emai, setemai] = useState('')
  const [ema, setUseremail] = useState('')
  const [password, setpas] = useState('')
  // const [user, setUser] = useState(null)

  const login = () => {
    
      LoginAction(emai, password)
      
    fire.auth().signInWithEmailAndPassword(emai, password)
    
      .then(res => {
        // setUser(res.user.uid)
        // setUseremail(res.user.email)
        history.push("/home")
      })
      .catch((err => {
        alert(err.message)
      }))
  }



  console.log("reducer user", user, loading)

if(!user){
    return (
      
      <div>
        
       
         <div>
<img className="oval" src={ova}/>
 <div class="row x">
 <div class="col-sm u">
 <form>
 <div class="form-group">
 <h2><b>Login</b></h2><br/>
    <img className="em" src={email} />
   <input type="text" class="form-control fo" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setemai(e.target.value)} /><br/>
   
 </div>
 <div class="form-group">
 <img className="e" src={pass}/>
   <input type="password" class="form-control fo" id="exampleInputPassword1" placeholder="Password"  onChange={(e) => setpas(e.target.value)}/>
 </div>

 <div class="form-check">

   <input type="checkbox" class="form-check-input check" id="exampleCheck1"/>

   <label class="form-check-label" class="exampleCheck1 remember">Remember me</label>
 
   <NavLink to="/Forgot"> 
   <a href="#" className="f">Forgetpassward</a> </NavLink>
 </div>
   

 <button type="button" class="qu" onClick={login}>login</button>

  <p className="paragra"> Don't have an account? <NavLink to="/signup" className="song"> Sign up </NavLink></p>
      

</form>
 </div>


</div> 



</div> 

    
 </div>

      
    );

    }

    else {
      return (
        <Home />
      )
    }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  loading: state.userReducer.loader

})

const mapDispatchtToProps = {
  LoginAction
}

export default connect(mapStateToProps, mapDispatchtToProps)(Login);