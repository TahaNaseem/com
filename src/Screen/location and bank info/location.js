import React from 'react'
import './location.css'
import Sidebar from '../../component/sidebar'


function Location(){

  

    return(

        <div>
            
            <div>
    <Sidebar/>
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


  <textarea class="form-control" placeholder=" comment " id="floatingTextarea2" ></textarea>
  <label for="floatingTextarea2">Comments</label>

  </div>

  <div class="col-lg-5">
  
  <h1> <b>Bank info</b></h1>
  <input type="text" class="form-control on" placeholder="Enter a username" aria-label="First name"/>
    <input type="text" class="form-control on" placeholder="Enter a username" aria-label="Last name"/>
    <input type="text" class="form-control on" placeholder="Enter a username" aria-label="Last name"/>
    <button className="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Proceed</button>



  </div>

</div>

</div>



     </div>

{/*      
<div class="modal fade motowidth" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content mwid">
     
      <div class="modal-body macbody">
        
      <p className="locmaod">MacDonalds</p><hr/>
      <p className="locmaod">Star Burks</p><hr/>
      <p className="locmaod">Pizza hut</p><hr/>
      <p className="locmaod">Burger King</p><hr/>
      <p className="locmaod">Taco bell</p><hr/>
      <p className="locmaod">Wyndy's</p><hr/>
      </div>
      
        <button type="button" class="closebt" data-bs-dismiss="modal">Done</button>
        
   
    </div>
  </div>
</div> */}



<div class="modal fade macbook" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body ">
       
      <p className="locmaod">MacDonalds</p><hr/>
      <p className="locmaod">Star Burks</p><hr/>
      <p className="locmaod">Pizza hut</p><hr/>
      <p className="locmaod">Burger King</p><hr/>
      <p className="locmaod">Taco bell</p><hr/>
      <p className="locmaod">Wyndy's</p><hr/>
      

      </div>
    
        <button type="button" class="btn btn-secondary kal" data-bs-dismiss="modal">Close</button>
   
     
    </div>
  </div>
</div>

</div>

    )    
}

export default Location;