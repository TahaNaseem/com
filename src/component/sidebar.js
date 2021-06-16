import React from 'react';
import './sidebar.css';
import yellow from '../component/assets/Oval.png'
import { NavLink } from 'react-router-dom';



    
function Sidebar(){

    function openNav() {
        document.getElementById("mySidenav").style.width = "200px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
   


    return(
        <div>

  <div className="ta">
         <div className="sideba">

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
            </div>  


        
<div className="side">
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
  <div className="sideba">

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
</div>
<span className="spa"onClick={openNav}>&#9776; </span>

</div>
   
        
       

        </div>
    )
}
export default Sidebar;