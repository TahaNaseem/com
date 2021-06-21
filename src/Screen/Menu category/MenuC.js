import React from 'react'
import Sidebar from '../../component/sidebar'
import './MenuC.css'

function MenuC(){
    return(
        <div>
            <div>
                <Sidebar />
            </div>
            <div className="importantmain">
        

           <h2 className="r"> <b> Menu Management </b> </h2>
           <label className="mj">category Name</label>
           <input type="text" className="f form-control"  id="autoSizingInputGroup"/>
           <button className="buttuon">Add</button>
</div>
        </div>
    )
}

export default MenuC;