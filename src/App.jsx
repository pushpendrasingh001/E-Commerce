import React from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import About from './components/About'
import Contact from './components/Contact'
import ManageAccount from './components/ManageAccount'
import Wishlist from './components/Wishlist'
function App() {
  return (
    <div className=' overflow-x-hidden '>
     <Home/> 
     <Signup/>
     <Signin/>
     <Contact/>
     <ManageAccount/> 
     <Wishlist/>
     <About/>
    </div>

  )
}



export default App
