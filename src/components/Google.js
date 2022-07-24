import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"  //function used to decode the token we geeting from google for the user's details

const Google = ({isLoggedIn,setIsLoggedIn}) => {
    const [user,setUser] = useState({})
    const handleCallbackResponse=(res)=>{
        setIsLoggedIn(true)
        console.log("Encoded JWT ID token: "+
         res.credential);
         let userObject= jwt_decode(res.credential)
         console.log(userObject);
         setUser(userObject)
         document.getElementById("signInDiv").hidden=true;
         
        }
        
        function handleSignOut(e){
            setUser({})
            document.getElementById("signInDiv").hidden=false;
    }

    useEffect(() => {
      
        /* global google */
        google.accounts.id.initialize({
            client_id:"413752310666-p9p1quk187i9rstumcunas4o06uig21q.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size: "large"}
      )
      // eslint-disable-next-line
    }, [])
    
 //if we have no user then show signIn button
 //If we have user show the logout button
  return ( 
    <div className='App'> 
    <div id="signInDiv"> 
        </div>
      {isLoggedIn&&<div className='App'>
                <img src={user.picture} alt={user.name} />
                <h3>{user.name}</h3>
    </div>}    
       {Object.keys(user).length!==0 && <button onClick={(e)=> handleSignOut(e) }>Signout</button>}         
    </div>
  )
}

export default Google


















































// import React from 'react'
// import { useGoogleOneTapLogin } from 'react-google-one-tap-login'

// const Google = ({isLoggedIn,setIsLoggedIn}) => {
//     useGoogleOneTapLogin({
//         onSuccess:(response)=>{
//             console.log(response);
//             setIsLoggedIn(true);
//         },
//         onError: (err)=>{console.log(err);},
//         googleAccountConfigs:{
//             client_id: "413752310666-p9p1quk187i9rstumcunas4o06uig21q.apps.googleusercontent.com"
//         }
//     })
//   return (
//     isLoggedIn?"Home":
//     <div>
//         SignIn please
//     </div>
//   )
// }

// export default Google