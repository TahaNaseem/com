import React from 'react';
import './poppins.css';
import { NavLink } from 'react-router-dom';
function Poppins(){
    return(
     <div className="popback">  
 <div className="popinscenter">
    
<h1 className="headingwh">Poppins</h1>
 <p className="mer">Merchant</p><br/>
 <NavLink to="/login"><button className="poopinsbut">Login Accouont</button></NavLink>
<p className="od">Don't have an account? <small> <NavLink to="/signup" style={{ color: 'white'}}>Sing up</NavLink></small></p> 





 </div>
 </div> 
    );
}

export default Poppins;