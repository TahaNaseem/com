import React from 'react';
import './verification.css';

function Verification(){

    return(

     <div className="container">
        <h2>Verification</h2>
        <p>We have sent you an email with a code</p> 
        <input className="ver" type="text" minLength="1"/>
        <input className="ver" type="text" minLength="1"/>
        <input className="ver" type="text" minLength="1"/>
        <input className="ver" type="text" minLength="1"/>
        <input className="ver" type="text" minLength="1"/>
        <input className="ver" type="text" minLength="1"/>
        <p>Din't recieve code? <small><a href="#" className="olc">resend (33 sec)</a></small> </p>
           
        <button className="o"><b>Continue</b></button>  
        </div>
    );
}
export default Verification