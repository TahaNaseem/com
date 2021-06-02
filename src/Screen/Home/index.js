import React from 'react'
import './index.css'
import edit from '../../component/assets/edit.png'
import delet from '../../component/assets/delet.png'
import { connect } from 'react-redux'
import Sidebar from '../../component/sidebar'
import {NavLink} from 'react-router-dom'


const Home = (props) => {
    console.log("props", props)

    function openNav() {
      document.getElementById("mySidenav").style.width = "200px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
 
    return(
        <div>
            {/* <p>{props.id}</p>
            <p>{props.nameid}</p> */}

   <div>
     <Sidebar/>
   </div>


 <div className="main">
 <NavLink to="/location"> 
 <button className="bnt">Add a Location</button></NavLink>
 <h3>Add Location</h3>
 
       <table class="table">
  <thead>
    <tr>
      <th scope="col">Resturent Name</th>
      <th scope="col">Add item</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="sa">Sarawan</th>
      <td>orangi Town </td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>
    <tr>
      <th scope="row" className="sa">Sarawan</th>
      <td>orangi Town </td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>
    <tr>
      <th scope="row" className="sa">Sarawan</th>
      <td>orangi Town </td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>
    <tr>
      <th scope="row" className="sa">Sarawan</th>
      <td>orangi Town  </td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>
    <tr>
      <th scope="row" className="sa">Sarawan</th>
      <td>orangi Town </td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>

    <tr>
      <th scope="row" className="sa">Sarawan</th>
      <td>orangi Town </td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>
    <tr>
      <th scope="row" className="sa">Sarawan</th>
      <td>orangi Town </td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>
    <tr>
      <th scope="row" className="sa">Sarawan</th>
      <td>orangi Town </td>
      <td><img className="edi" src={edit}/></td>
      <td><img className="edi" src={delet}/></td>
    </tr>

  </tbody>
</table> 

        

            </div>



        </div>
    )
}



const mapStateToProps = (state) => ({
    user: state.userReducer.user,
  
  })
  
  const mapDispatchtToProps = {
  }
  
  export default connect(mapStateToProps, mapDispatchtToProps)(Home);
