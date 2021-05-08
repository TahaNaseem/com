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

              <Sidebar/>


            <div className="main">


          <div className="pr"> <h2 className="r">Add a Location </h2>
          <button className="bot">Add Location</button>
          </div>
     
          <div className="pr"> <p className="r">resturent Name</p>
          <p className="op">Add Location</p>
          <p className="po">Edit</p>
          <p className="op">Delet</p>
          </div><hr/>


          <div className="pr"> <p className="r">sarawan</p>
          <p className="op">orangi town ghaziaba Sector 11 1/2 islam chowk</p>
          <p className="op">Edit</p>
          <p className="op">Delet</p>
          </div><hr/>


          <div className="pr"> <p className="r">sarawan</p>
          <p className="op">orangi town ghaziaba Sector 11 1/2 islam chowk</p>
          <p className="op">Edit</p>
          <p className="op">Delet</p>
          </div><hr/>

          <div className="pr"> <p className="r">sarawan</p>
          <p className="op">orangi town ghaziaba Sector 11 1/2 islam chowk</p>
          <p className="op">Edit</p>
          <p className="op">Delet</p>
          </div><hr/>

          <div className="pr"> <p className="r">sarawan</p>
          <p className="op">orangi town ghaziaba Sector 11 1/2 islam chowk</p>
          <p className="op">Edit</p>
          <p className="op">Delet</p>
          </div><hr/>

        

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
