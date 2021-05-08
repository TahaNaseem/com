import React from 'react';
import './sidebar.css';
import yellow from '../component/assets/Oval.png'
function Sidebar(){

    return(
        <div className="sidebar">

            <div className="text">
            <h4 className="tex">Poppins</h4>
            <p className="te">Marchant</p>
            <p className="te"> Add Location</p>
            <p className="te">.......</p>
            </div>

          <div className="pic">
              <img className="goal" src={yellow}/>
          </div>


        </div>
    )
}
export default Sidebar;