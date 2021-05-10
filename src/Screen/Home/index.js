import React from 'react'
import './index.css'
import { connect } from 'react-redux'
import Sidebar from '../../component/sidebar'


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



 <div className="main">
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
      <th scope="row">Sarawan</th>
      <td>orangi Town </td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">Sarawan</th>
      <td>orangi Town </td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">Sarawan</th>
      <td>orangi Town </td>
      <td>the Bird</td>
      <td>@twitter</td>
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
