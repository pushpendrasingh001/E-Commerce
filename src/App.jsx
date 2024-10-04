import React from 'react'
import Home from './components/Home'
import Signup from './components/Signup'

import Signin from './components/Signin'
import About from './components/About'
function App() {
  return (
    <div className=' overflow-x-hidden '>
    <Home/> 
     <Signup/>
     <Signin/> 
     {/* <About/> */}
    </div>

  )
}

export default App
