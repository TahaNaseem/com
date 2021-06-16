import React from 'react';
import './verification.css';
import { NavLink } from 'react-router-dom';

function Verification(){

    document.addEventListener("DOMContentLoaded", function(event) {

        function OTPInput() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function(event) { if (event.key==="Backspace" ) { inputs[i].value='' ; if (i !==0) inputs[i - 1].focus(); } else { if (i===inputs.length - 1 && inputs[i].value !=='' ) { return true; } else if (event.keyCode> 47 && event.keyCode < 58) { inputs[i].value=event.key; if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode> 64 && event.keyCode < 91) { inputs[i].value=String.fromCharCode(event.keyCode); if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); } } OTPInput(); });


    return(

<div class="container height-100 d-flex justify-content-center align-items-center">
<div class="position-relative">
    <div class="card p-2 text-center">
      <h2>Verification</h2>
        <div> <span>You have sent you an email with a code</span> </div>
        <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2"> <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> </div>
        <div class="mt-4"><NavLink to ="newpass"><button class="px-4 validate con">Continue</button></NavLink>  </div>
    </div>
    <div class="card-2">
        <div class="content d-flex justify-content-center align-items-center"> <span>Didn't recieved the code</span> <a href="#" class="text-decoration-none ms-3">Resend(1/3)</a> </div>
    </div>
</div>
</div>


    );
}
export default Verification;