import React,{useState} from 'react';
import './forget.css';
import email from '../component/assets/email.png'
import {NavLink} from 'react-router-dom'
import fire from '../fire'

function Forget(){
    const [forge, setforge] = useState('')
   
     
     const forget = () => {
         fire.auth().createUserWithEmailAndPassword()
     }
     console.log(forge)
    return(
<div className="container">
<h2>Forget Passward</h2><br/>
 <img className="em" src={email} /><input type="text" className="ema" placeholder="Email" onChange={(e)=>setforge(e.target.value)}/><br/><br/>
 <NavLink to="/login">
 <button className="t"onClick={forget}><b>Submit</b></button></NavLink>
</div>
    );
}
export default Forget;