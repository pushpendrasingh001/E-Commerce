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
    {/* <Home/> 
     <Signup/>
     <Signin/>
     <About/>
     <Contact/>
<ManageAccount/> */}
<Wishlist></Wishlist>
    </div>

  )
}



export default App
