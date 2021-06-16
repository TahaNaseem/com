import React from "react"
import './menusecond.css'
import Sidebar from '../../component/sidebar'
import edit from '../../component/assets/edit.png'
import delet from '../../component/assets/delet.png'
import burger from '../../component/assets/burger.jpg'
import { NavLink } from "react-router-dom"

function Menusecond(){
    return(
        <div>
         
      <div>
     <Sidebar/>
   </div> 


<div className="importan">
  
 
<NavLink to= "/item"><button className="bn">Add item</button></NavLink>
 <NavLink to= "/Catogry"><button className="bnt">Add catogry</button></NavLink>
 <h1><b>Menu Manegment</b></h1>

 <input type="text" class="form-control inputtyp" placeholder="Enter a username" aria-label="First name"/>

<div>

    <div>
        
       <table class="table">
  
  <tbody>
  
    <tr className="try">
      <th scope="row" className="sa">product</th>
      <th>category</th>
      <th>Price</th>
      <th>prep Time</th>
      <th>Edit</th>
      <th>Delet</th>
    </tr>
    <tr>
      <td scope="row" className="sa"><img className="burg" src={burger}/>1 pc chiken </td>
      <td className="color">Burger</td>
      <td  className="color">$5.99</td>
      <td  className="color">7 min</td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>

    <tr>
      <td scope="row" className="sa"><img className="burg" src={burger}/>1 pc chiken</td>
      <td  className="color">Burger</td>
      <td  className="color">$5.99</td>
      <td  className="color">7 min</td>
      <td><img className="edi " src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>
   
    <tr>
      <td scope="row" className="sa"><img className="burg" src={burger}/>1 pc chiken</td>
      <td  className="color">Burger</td>
      <td  className="color">$5.99</td>
      <td  className="color">7 min</td>
      <td ><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>

    <tr>
      <td scope="row" className="sa"><img className="burg" src={burger}/>1 pc chiken</td>
      <td  className="color">Burger</td>
      <td  className="color">$5.99</td>
      <td  className="color">7 min</td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>
  
    <tr>
      <td scope="row" className="sa"><img className="burg" src={burger}/>1 pc chiken</td>
      <td  className="color">Burger</td>
      <td  className="color">$5.99</td>
      <td  className="color">7 min</td>
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
export default Menusecond;