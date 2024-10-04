import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Home/Sidebar'
import HomeToday from './Home/HomeToday'
import Footer from './Footer'
import HomeCategories from './Home/HomeCategories'
import HomeThis from './Home/HomeThis'
import HomeBanner from './Home/HomeBanner'
import HomeProduct from './Home/HomeProduct'
import HomeFeature from './Home/HomeFeature'
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
      <HomeFeature/>
      <Footer/>
      </div>
  )
}

export default Home
