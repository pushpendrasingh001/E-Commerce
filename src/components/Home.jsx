import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import HomeToday from './HomeToday'
function Home() {
  return (
    <div className=''>
      <Navbar/>
      <Sidebar/>
      <HomeToday/>
      </div>
  )
}

export default Home
