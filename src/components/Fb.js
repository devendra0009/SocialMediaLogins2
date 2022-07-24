import React, { useState } from 'react';
import '../App.css'
import FacebookLogin from 'react-facebook-login';

const Fb = ({isLoggedIn,setIsLoggedIn}) => {
    let [user,setUser]=useState({image:"",name:"",email:""})
  
    const responseFacebook = (response) => {
      console.log(response.name);
      setUser({
      'image':response.picture.data.url,
      'name':response.name ,
      'email':response.email
      })
      setIsLoggedIn(true)
    }
    console.log(user);
  return (
    isLoggedIn?<div className='App'>
    <div className="image"><img src={user.image} alt="" /></div>
    <div className="name">{user.name}</div> 
    <div className="email">{user.email}</div> 
    <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button>
    </div>:
    <div className='App'>
    <FacebookLogin
    appId="1381145499063494"
    // autoLoad={true}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={responseFacebook} 
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
    />
    </div>
  )
}

export default Fb