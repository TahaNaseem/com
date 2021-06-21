import React from 'react'
import Sidebar from '../../component/sidebar'
import './Menu.css'
import lock from '../../component/assets/2.png'
import Delete from '../../component/assets/Delete.png'
import { Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Menu (){
    return(
        <div className="">
            <div>
                <Sidebar />
            </div>
           <div className="importantmain">
               <NavLink to="/Menu2">
           <button className="bot">Add Menu</button>
           </NavLink>


           <h2 className="r"> <b> Menu Management </b> </h2>
           <input type="text" className="from form-control"  id="autoSizingInputGroup" placeholder="Search here" />
           <div className="margin">
           <Table>
                          
                          <tbody>
                              
                          <tr>
                                      <td></td>
                                      <td></td>
                                     <td></td>
                                     <td></td>
                                  
                                  </tr>
                                  <tr className="tg">
                                      <td >ID</td>
                                      <td>Menu</td>
                                     <td>Edit</td>
                                     <td>Delete</td>
                                  
                                  </tr>
                            
                                  <tr className="tg" >
                                      <td>1</td>
                                      <td>United States</td>
                                      <td>
                                       <span><img className="iii" src={lock}/></span>
                                       </td>
                                       <td>
                                      <span><img className="iii" src={Delete}/></span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td>Pheonix</td>
                                      <td>
                                       <span><img className="iii" src={lock}/></span>
                                       </td>
                                       <td>
                                      <span><img className="iii" src={Delete}/></span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td>3030</td>
                                      <td>                               
                                          <span><img className="iii" src={lock}/></span>
                                          </td>
                                          <td>
                                      <span><img className="iii" src={Delete}/></span>
                                      </td>
                                  </tr>
                                  </tbody>
                                  </Table>
                         
           </div>
           </div>
           


        </div>
    )
}
export default Menu;