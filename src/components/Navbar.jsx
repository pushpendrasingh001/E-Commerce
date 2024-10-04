import React from 'react'

function Navbar() {
  return (
  <>
  <div className="navbar mt-[25px] border-l-orange-200">
  <div className="flex-1">
    <a className=" text-3xl font-bold ml-8 flex gap-5">UrbanCart <img src="../../public/fevicon.svg " alt="" /></a>
   
  </div>
 <div className='mr-[25%]'>
 <ul className='flex gap-10 text-lg font-semibold'>
 <a href="">Home</a>
 <a href="">About</a>
 <a href="">Contact</a>
 <a href="">SignUp</a>
  </ul>
 </div>
  <div className="flex-none gap-2">
 <span className='flex'>     <input type="text" placeholder="What are you looking for ?..." className="w-24 md:w-auto"  />
    <img src="../../public/navbar/search.svg" alt="" />
    </span>
 
    <img src="../../public/navbar/wishlist.svg" alt="" />
    <img src="../../public/navbar/cart.svg" alt="" />

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
        <li><a>Manage My Account</a></li>
        <li><a>My Order</a></li>
        <li><a>My Review</a></li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li> 
      
      </ul>
    </div>
  </div>
</div>
  
  </>
  )
}

export default Navbar
