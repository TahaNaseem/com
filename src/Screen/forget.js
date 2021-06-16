import React,{useState} from 'react';
import './forget.css';
import email from '../component/assets/email.png'
import ova from '../component/assets/oval1.png'
import {NavLink} from 'react-router-dom'
import fire from '../fire'

function Forget(){
    const [forge, setforge] = useState('')
   
     
     const forget = () => {
         fire.auth().createUserWithEmailAndPassword()
     }
     console.log(forge)
    return(
        <div>
            <img className="oval" src={ova}/>
 <div className="forgetcenter">
<h3><b>Forget Passward</b></h3><br/>
 
 <img className="iconsm" src={email} />
   <input type="text" class="form-control forgetfo" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setforge(e.target.value)} /><br/>
   
 <NavLink to="/varification">
 <button type="button" class="qu" onClick={forget}>Submit</button></NavLink>
</div>

</div>


    
    );
}
export default Forget;