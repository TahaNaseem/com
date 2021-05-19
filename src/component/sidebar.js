import React from 'react';
import './sidebar.css';
import yellow from '../component/assets/Oval.png'
import { NavLink } from 'react-router-dom';

function Sidebar(){

    return(
        <div className="sidebar">

            <div className="text">
            <h4 className="tex">Poppins</h4>
            <p className="te">Marchant</p>
            <NavLink to="/location" style={{fontSize:15 , color: 'white', textDecoration:'none' }}> <p className="te"> Add Location</p></NavLink>
        <NavLink to="/menu" style={{fontSize:15 , color: 'white',textDecoration:'none' }}> <p className="te">Menu</p></NavLink>
            </div>

          <div className="pic">
              <img className="goal" src={yellow}/>
          </div>


        </div>
    )
}
export default Sidebar;