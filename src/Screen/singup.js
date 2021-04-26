import React, { useState } from 'react'
import './singup.css'
import img1 from '../component/assets/email.png'
import img2 from '../component/assets/passward.png'
import img3 from '../component/assets/user.png'
import img4 from '../component/assets/phone.png'
import back from '../component/assets/oval1.png'
import { NavLink } from 'react-router-dom'
import fire from '../fire'
import { useHistory } from 'react-router-dom'


function Singup() {

  let history = useHistory()
  const [name, setName] = useState('')
  const [user, setuser] = useState('')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const [phone, setphone] = useState('')
  const singup = () => {

    fire.auth().createUserWithEmailAndPassword(email, pass)
      .then((res) => {
        console.log("resullt signUp", res)
        fire.firestore().collection("users").add({
          name: name,
          email: email,
          userName: user,
          phoneNumber: phone,
          uid: res.user.uid
        })
          .then((response) => {
          alert("Signup Succesfully")
          history.push('/')
          })
          .catch((err) => {
          alert(err.message)
          })
      })
      .catch((err) => {
        console.log("error signUp", err)
        alert(err.message)
      })

  }

  return (

    <div className="container">

      <h1 className="he">Singup</h1><br />
      <img className="ime" src={img3} /><input type="text" className="mai" placeholder="Name" onChange={(e) => setName(e.target.value)} />

      <img className="ime" src={img3} /><input type="text" className="mai" placeholder="Username" onChange={(e) => setuser(e.target.value)} /><br /><br />

      <img className="ime" src={img1} /><input type="text" className="mai" placeholder="Email" onChange={(e) => setemail(e.target.value)} />

      <img className="ime" src={img2} /><input type="password" className="mai" placeholder="Password" onChange={(e) => setpass(e.target.value)} /><br /><br />
      <img className="ime" src={img4} /><input type="number" className="mai" placeholder="Phone Number" onChange={(e) => setphone(e.target.value)} />

      <button className="tb" onClick={singup}><b>Submit</b></button>

    </div>    

);
}

export default Singup;