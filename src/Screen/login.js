import React, { useState } from 'react';
import './login.css';
import email from '../component/assets/email.png'
import pass from '../component/assets/passward.png'
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
      <div className="container">
        <h2>Login</h2><br />
        <img className="em" src={email} /><input type="text" className="ema" placeholder="Email" onChange={(e) => setemai(e.target.value)} /><br /><br />
        <img className="e" src={pass} /><input type="Password" className="ema" placeholder="Passward" onChange={(e) => setpas(e.target.value)} /><br />
        <input type="checkbox" />Remeber me
        {/* <NavLink to="/forget"> */}
        <a href="#" className="for"><b>Forgetpassward</b></a>
        {/* </NavLink> */}
        <br /><br />
  
        <button className="bt" onClick={login}><b>login</b></button>
        <br /><br />
        {/* // <NavLink to="/signup"> */}
        <button className="bt"><b>Creat Account</b></button>
        {/* // </NavLink> */}
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