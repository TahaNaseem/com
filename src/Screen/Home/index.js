import React from 'react'
import './index.css'
import { connect } from 'react-redux'
import Sidebar from '../../component/sidebar'


const Home = (props) => {
    console.log("props", props)
    return(
        <div>
            {/* <p>{props.id}</p>
            <p>{props.nameid}</p> */}
<div className="side">
<Sidebar/>
</div>

            <div className="main">

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
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
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
