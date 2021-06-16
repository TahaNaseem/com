import React from "react"
import './menu.css'
import Sidebar from '../../component/sidebar'
import edit from '../../component/assets/edit.png'
import delet from '../../component/assets/delet.png'
import { NavLink } from "react-router-dom"
function Menu(){

   
    return(

       <div>
         
     <div>
     <Sidebar/>
   </div>


<div className="important">
  
 <NavLink to ="/item">
 <button className="bnt">Add a Menu</button></NavLink>
 <h1><b>Menu Manegment</b></h1>

 <input type="text" class="form-control inputtyp" placeholder="Enter a username" aria-label="First name"/>

<div>

    <div>
        
       <table class="table">
  
  <tbody>
  
    <tr className="try">
      <td scope="row" className="sa">ID</td>
      <td>Menu </td>
      <td>Edit</td>
      <td>Delet</td>
    </tr>
    <tr>
      <td scope="row" className="sa">1</td>
      <td>United State</td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>

    <tr>
      <td scope="row" className="sa">2</td>
      <td>United State</td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>
   
    <tr>
      <td scope="row" className="sa">3</td>
      <td>United State</td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>

    <tr>
      <td scope="row" className="sa">4</td>
      <td>United State</td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>
  
    <tr>
      <td scope="row" className="sa">5</td>
      <td>United State</td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>

 

    
    


  </tbody>
</table> 
    </div>


    
</div>
<div>

    
</div>


</div>



       </div>


    )
}
export default Menu;