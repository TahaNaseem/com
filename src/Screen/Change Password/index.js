import React from 'react'
// import React, { useState } from 'react';
// import fire from '../fire'
import { useHistory } from 'react-router-dom'
import './index.css'
// import { LoginAction } from '../Redux/Action/userAction'
// import { connect } from 'react-redux';
// import yellow from '../component/assets/Oval.png'

import lockpicture from '../../component/assets/passward.png'
import oval from '../../component/assets/Oval.png'
function Index(){
  let history = useHistory()
  const chek = () => {

  history.push("/Loogin2")
  }
    return(
<div className="mainj">
<h2 className="r"> <b> Choose a New Password </b> </h2>
    
<div className="g input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping"><img className="ii" src={lockpicture}/></span>
  <input type="text" className="k form-control" placeholder="**************" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<div className="g input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping"><img className="ii" src={lockpicture}/></span>
  <input type="text" className="k form-control" placeholder="*************" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
{/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary hjk" data-bs-toggle="modal" data-bs-target="#exampleModal">
Continoue
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content mh">
    
    
      <div class="modal-body">
        <img className="df" src={oval}/>
        <h2 className="h23">Change password</h2>
        <p className="pg">You may now ContinoueUsing poppins with your new password</p>
      </div>
      <div className="">
        <button type="button" className="btn btnm btn-" data-bs-dismiss="modal" onClick={chek}>Close</button>
      </div>
    </div>
  </div>
</div>
</div>
    )
}
export default Index;