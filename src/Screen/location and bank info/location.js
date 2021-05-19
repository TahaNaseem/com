import React from 'react'
import './location.css'
import Sidebar from '../../component/sidebar'


function Location(){

    
    function openNav() {
        document.getElementById("mySidenav").style.width = "200px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

    return(

        <div>
            
   <div className="ta">
        <Sidebar/>
            </div>  
        
<div className="side">
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
 <Sidebar/>
</div>
<span className="spa"onClick={openNav}>&#9776; </span>

</div>

    <div className="ma">
   
     
     <div className="input group">

       <div class="row">
         
  <div class="col-lg-7 ">

  <h1> <b>Location info</b> </h1>
    <input type="text" class="form-control on" placeholder="Enter a username" aria-label="First name"/>
    <input type="text" class="form-control on" placeholder="Enter a username" aria-label="Last name"/>
    <input type="text" class="form-control on" placeholder="Enter a username" aria-label="Last name"/>
    <input type="text" class="form-control on" placeholder="Enter a username" aria-label="Last name"/>
    
<select class="form-select form-select-sm on" aria-label=".form-select-sm example">
  <option selected>Chain</option>
  <option value="1">Yes</option>
  <option value="2">No</option>
</select>

<input type="text" class="form-control on" placeholder="Enter a username" aria-label="Last name"/>
<input type="text" class="form-control on" placeholder="Enter a username" aria-label="Last name"/>
<select class="form-select form-select-sm on" aria-label=".form-select-sm example">
  <option selected>Select menu</option>
  <option value="1">Yes</option>
  <option value="2">No</option>
</select>

<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
  </div>

  <div class="col-lg-5">
  
  <h1> <b>Bank info</b></h1>
  <input type="text" class="form-control on" placeholder="Enter a username" aria-label="First name"/>
    <input type="text" class="form-control on" placeholder="Enter a username" aria-label="Last name"/>
    <input type="text" class="form-control on" placeholder="Enter a username" aria-label="Last name"/>
    <button className="button">Proceed</button>



  </div>

</div>

</div>



     </div>

</div>

    )    
}

export default Location;