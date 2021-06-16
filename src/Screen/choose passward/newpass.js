import React from 'react'
import './newpass.css'
import email from '../../component/assets/email.png'
import pass from '../../component/assets/passward.png'
import ova from '../../component/assets/oval1.png'
import oval from '../../component/assets/Oval.png'

function NewPass(){
    return(

        <div>
        
       
        <div>
<img className="oval" src={ova}/>
<div class="row x">
<div class="col-sm u">
<form>
<div class="form-group">
<h3><b>Choose a New Password</b></h3><br/>
<img className="e" src={pass}/>
  <input type="password" class="form-control fo" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="******************" /><br/>
  
</div>
<div class="form-group">
<img className="e" src={pass}/>
  <input type="password" class="form-control fo" id="exampleInputPassword1" placeholder="******************" />
</div>





  

<button type="button" class="logqu" data-bs-toggle="modal" data-bs-target="#exampleModal">continue</button>

 
     

</form>
</div>


</div> 



</div> 

{/* <div class="modal fade modtop" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content mwid">
     
      <div class="modal-body">
        <img className="moval" src={oval}/>
        <h3 className="mhead">Password Change</h3>
      <small><p className="modpsa">you  now continue using poopins with your  password</p></small>  
      </div>
      
        <button type="button" class="closebt" data-bs-dismiss="modal">Close</button>
        
   
    </div>
  </div>
</div> */}

<div class="modal fade maskal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content chal">
     
      <div class="modal-body">
      <img className="moval" src={oval}/>
        <h3 className="mhead">Password Change</h3>
      <small><p className="modpsa">you  now continue using poopins with your  password</p></small> 
      </div>
     
        <button type="button" class="btn btn-secondary closebt" data-bs-dismiss="modal">Close</button>
     
      
    </div>
  </div>
</div>
   
</div>

    )
}
export default NewPass;