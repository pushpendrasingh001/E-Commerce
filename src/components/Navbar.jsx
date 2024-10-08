import React, { useEffect, useState } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY> 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div
          className={`navbar fixed top-0 left-0 bg-slate-200 right-0 z-50 ${
            sticky
              ? "sticky-navbar shadow-md bg-slate-300 duration-300 translate-all ease-in-out"
              : ""
          }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  text-xl font-medium  "
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Gallery">Contact</a>
                </li>
             
                <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  <a href="/Contact">Sign Up</a>
                </li>
              </ul>
            </div>
            <img src="/public/fevicon.svg" className="w-[3rem] ml-5 h-[4rem]" />
           
            <a className=" text-4xl font-bold ml-9 md: text-center">
              UrbanCart
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1  text-2xl font-medium">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Gallery">Contact</a>
              </li>

             
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Contact">Sign up</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
          <div className="dropdown  flex justify-end dropdown-end">
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
        <li><a>My Wishlist</a></li>
        <li><a>Logout</a></li> 
      
      </ul>
    </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;