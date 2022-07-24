import React, { useState } from 'react';
import Fb from "./components/Fb"
import './App.css'
import Google from './components/Google';

const App = () => {
  
  const [isLoggedInFb, setIsLoggedInFb]=useState(false)
  const [isLoggedInGgl, setIsLoggedInGgl]=useState(false)
  return (
    <div className='App'>
      <Fb isLoggedIn={isLoggedInFb} setIsLoggedIn={setIsLoggedInFb}/> 
      <Google isLoggedIn={isLoggedInGgl} setIsLoggedIn={setIsLoggedInGgl} />
    </div>
  )
}

export default App