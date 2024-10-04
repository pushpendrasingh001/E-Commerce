import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import HomeToday from './HomeToday'
import Footer from './Footer'
import HomeCategories from './HomeCategories'
import HomeThis from './HomeThis'
import HomeBanner from './HomeBanner'
import HomeProduct from './HomeProduct'
function Home() {
  return (
    <div className=''>
      <Navbar/>
      <Sidebar/>
      <HomeToday/>

      <HomeCategories/>
      <HomeThis/>
      <HomeBanner/>
      <HomeProduct/>
      <Footer/>
      </div>
  )
}

export default Home
