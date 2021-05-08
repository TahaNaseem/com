import React, { useState } from 'react'
import './singup.css'
import img1 from '../component/assets/email.png'
import img2 from '../component/assets/passward.png'
import img3 from '../component/assets/user.png'
import img4 from '../component/assets/phone.png'
import back from '../component/assets/oval1.png'
import { NavLink } from 'react-router-dom'
import fire from '../fire'
import { useHistory } from 'react-router-dom'
import { SingupAction  } from '../Redux/Action/userAction'
import { connect } from 'react-redux';

function SingnupAc({SingupAction, user, loading}) {
  
  let history = useHistory()
  const [name, setName] = useState('')
  const [username, setuserName] = useState('')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const [phone, setphone] = useState('')


const Singup = () => {
  SingupAction(email,pass, name, phone, username)
}

console.log("reducer user", user, loading)
  return (

    <div className="container">

      <h1 className="he">Singup</h1><br />
      <img className="ime" src={img3} /><input type="text" className="mai" placeholder="Name" onChange={(e) => setName(e.target.value)} />

      <img className="ime" src={img3} /><input type="text" className="mai" placeholder="Username" onChange={(e) => setuserName(e.target.value)} /><br /><br />

      <img className="ime" src={img1} /><input type="text" className="mai" placeholder="Email" onChange={(e) => setemail(e.target.value)} />

      <img className="ime" src={img2} /><input type="password" className="mai" placeholder="Password" onChange={(e) => setpass(e.target.value)} /><br /><br />
      <img className="ime" src={img4} /><input type="number" className="mai" placeholder="Phone Number" onChange={(e) => setphone(e.target.value)} />
      
      <button className="tb" onClick={Singup}><b>Submit</b></button> 
      

    </div>    

)
}


const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  loading: state.userReducer.loader

})

const mapDispatchtToProps = {
  SingupAction
}

export default connect(mapStateToProps, mapDispatchtToProps)(SingnupAc)