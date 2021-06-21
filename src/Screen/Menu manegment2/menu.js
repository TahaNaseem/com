import React from 'react'
import Sidebar from '../../component/sidebar'
import './menu.css'
import lock from '../../component/assets/2.png'
import Delete from '../../component/assets/Delete.png'
import Food from '../../component/assets/food pic.jpg'
import { Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Menu2(){
    return(
        <div>
<div>
    <Sidebar />
</div>
<div className="importantmain">
          <NavLink to="/Item">
           <button className="bot">Add Item</button>
           </NavLink>
           <NavLink to="/MenuC">
           <button className="bot">Add Category</button>
           </NavLink>

           <h2 className="r"> <b> Menu Management </b> </h2>
           <input type="text" className="from form-control"  id="autoSizingInputGroup" placeholder="Search here" />
           <div className="margin">
           <Table>
                          
                          <tbody>
                              
                          <tr>
                                      <th>Product</th>
                                      <th>cetogary</th>
                                     <th>price</th>
                                     <th>prep Time</th>
                                     <th>Edit</th>
                                     <th>Delete</th>
                                  
                                  </tr>
                                  <tr className="tg">
                                  <td className="td" ><span><img className="iii" src={Food}/></span>
                                  1pc Chicken
                                  
                                  <p>24,March 2021,08:28 pm </p>
                                  </td>
                                      <td>Burger</td>
                                      <td>$5.99</td>
                                     <td>07 mins</td>
                                     <td>
                                       <span><img className="iii" src={lock}/></span>
                                       
                                       </td>
                                       <td>
                                      <span><img className="iii" src={Delete}/></span>
                                      </td>
                                  
                                  </tr>
                            
                                  
                                  <tr className="tg">
                                  <td className="td"><span><img className="iii" src={Food}/></span>
                                  1pc Chicken
                                  
                                  <p>24,March 2021,08:28 pm </p>
                                
                                  </td>
                                      <td>Chicken Wings</td>
                                      <td>$15.99</td>
                                     <td>04 mins</td>
                                     <td>
                                       <span><img className="iii" src={lock}/></span>
                                       </td>
                                       <td>
                                      <span><img className="iii" src={Delete}/></span>
                                      </td>
                                  
                                  </tr>
                                  <tr className="tg">
                                  <td className="td"><span><img className="iii" src={Food}/></span>
                                  1pc Chicken
                                  
                                  <p>24,March 2021,08:28 pm </p>
                                  
                                  </td>
                                      <td>Drinks</td>
                                      <td>$2.99</td>
                                     <td>30 mins</td>
                                     <td>
                                       <span><img className="iii" src={lock}/></span>
                                       </td>
                                       <td>
                                      <span><img className="iii" src={Delete}/></span>
                                      </td>
                                  
                                  </tr>
                                  <tr className="tg">
                                  <td className="td"><span><img className="iii" src={Food}/></span>1pc Chicken
                                  
                                  <p>24,March 2021,08:28 pm </p>
                                  
                                  </td>
                                      <td>Fries</td>
                                      <td>$15.99</td>
                                     <td>20 mins</td>
                                     <td>
                                       <span><img className="iii" src={lock}/></span>
                                       </td>
                                       <td>
                                      <span><img className="iii" src={Delete}/></span>
                                      </td>
                                  
                                  </tr>
                                  
                                  <tr className="tg">
                                  <td className="td"><span><img className="iii" src={Food}/></span>1pc Chicken
                                  
                                  <p>24,March 2021,08:28 pm </p>
                                  
                                  </td>
                                      <td>Pizaa</td>
                                      <td>$5.99</td>
                                     <td>25 mins</td>
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

export default Menu2;