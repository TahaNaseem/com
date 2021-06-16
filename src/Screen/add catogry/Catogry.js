import React from 'react'
import Sidebar from '../../component/sidebar'
import './Catogry.css'

function Catogry (){
    return(
        <div>
<div>
<Sidebar/>
</div>

<div className="important">
<h3 className="mcatag"><b>Menu Categery</b></h3>

<label className="catag">Categery name</label>
<input type="text" class="form-control on" placeholder="Enter a username" aria-label="First name"/>
<button className="bcatag">Add a Menu</button>
</div>

</div>
    )
}
export default Catogry ;