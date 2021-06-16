import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../../component/sidebar'
import './item.css'

function Iteminfo(){
     
  const [custom,setcustom] = useState("")
   


  
  
  
    return(
      <div>
          <div>
              <Sidebar/>
          </div>
           
           <div className="itemmain">

         

<div class="row">
         
         <div class="col-lg-7 ">
       
         <h1> <b>Item Info </b> </h1>
               <label className="labletop">item Name</label>
               <input type="text" class="form-control on" placeholder="Enter a username" aria-label="First name"/>
                
               <label className="lableto">Select Category</label>
               <select class="form-select form-select-sm on" aria-label=".form-select-sm example">
               <option selected>Soft dink</option></select>
   
               <label className="lableto">Item Customization</label>
               <select class="form-select form-select-sm on" aria-label=".form-select-sm example"   onChange={()=>{
               
                   const selectedcustom =<input type="text" class="form-control on" placeholder="item customization name" aria-label="First name"/>
                
                   setcustom(selectedcustom)
                
               }}>
               <option value="a">No</option>
               <option >Yes</option>
               </select>    
               {custom}<br/>
              

                <label className="lableto">Price</label>
               <input type="text" class="form-control on" placeholder="Enter a username" aria-label="First name"/>

               <form action="/action_page.php">
               <label for="appt" className="lableto">Select a time:</label><br/>
               <input type="time"  id="appt" name="appt"/>
               </form>

               <div class="form-check form-switch">
               <label class="form-check-label tpo" for="flexSwitchCheckChecked">Available in Stock</label>
               <input class="form-check-input cl" type="checkbox" id="flexSwitchCheckChecked"/></div>
               

       
         </div>
       
         <div class="col-lg-5 lele">
         
         <div className="borderdash">
             <div className="filetop">
         <label for="change" className="visibli">Drag 'n' drop some files here, or click to select files</label>
         <input type="file" id="change"/>
         </div>
         </div>
       
         <p className="pot">Write Discription</p>
         <textarea rows="10" class="form-control textar" spellcheck="false">
         </textarea>

         <NavLink to = "/menusecond"> <button className="beta">Add</button></NavLink>
        
       
         </div>
       
         </div>

           </div>  

        
           </div>
           
      
    )
}
export default Iteminfo;