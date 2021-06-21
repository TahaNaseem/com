import React from 'react'
import Sidebar from '../../component/sidebar'
import './Item.css'


function Item (){
    return(
        <div>
<div>
    <Sidebar />
</div>
<div className="importantmain">



<div className="row">




<div className="col-lg-6 m ">
<h2 className="r"> <b> Item info </b> </h2>
<label>
Item Name
</label>
<input type="text" className="mn form-control"  id="autoSizingInputGroup" placeholder="Enter a username" />
<label>Select Category</label><br></br>
<select className=" mn ">
    <option>soft Drink</option>


</select>
<br></br>

<label>Item Customization</label>

<input type="text" className="mn form-control"  id="autoSizingInputGroup" placeholder="Enter a username" />
<label>Customization</label>
<input type="text" className="mn form-control"  id="autoSizingInputGroup" placeholder="Email" />
<label>price</label>
<input type="text" className="mn form-control"  id="autoSizingInputGroup" placeholder="Enter a username" />

<form action="/action_page.php">
               <label for="appt" className="lableto">Preparation Time</label><br/>
               <input type="time"  id="appt" name="appt" className="mn"/>
               </form>
               <div className="form-check form-switch rememberme">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
        <label className="form-check-label " for="flexSwitchCheckChecked">Available is Stock   </label>
      </div>
</div>


<div className="col-lg-4 ">


<div className="borderdash">
             <div className="filetop">
         <label for="change" className="visibli">Drag 'n' drop some files here, or click to select files</label>
         <input type="file" id="change"/>
         </div>
         </div>
         <label>Write Discription</label>
         <div class="mn form-floating">
  <textarea className=" mn nv form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <button className="hj">Save</button>
</div>

    
</div>

</div>



</div>

        </div>
    )
}
export default Item;