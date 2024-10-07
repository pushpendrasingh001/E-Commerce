import React from "react";

function Footer() {
  return (
    <div>
   
      <footer className="footer bg-black font text-white p-10 justify-evenly">
        <nav>
          <h6 className=" font-mono text-3xl">UrbanCart</h6>
          <a className="link link-hover text-xl">Subscribe</a>

          <a className="link link-hover text-lg">
            Get 10% off your first order
          </a>
          <span className="flex border h-[40px] items-center ">
            {" "}
            <input
              type="email"
              placeholder="Enter your mail"
              className="bg-black"
            />
            <img
              src="/footer/emailarrow.png"
              className="
h-[24px] w-[24px] "
            />
          </span>
        </nav>
        <nav>
          <h6 className="font-mono text-xl">Support</h6>
          <p>Lucknow 226028 <br />Uttar Pradesh,India</p>
         <p>Virat9005820988@gmail.com</p> 
         <p> +91 8005006785</p>
        </nav>
        <nav>
          <h6 className="font-mono text-xl">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-mono  text-xl">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <nav >
          <h6 className="font-mono text-xl ">Download App</h6>
<img src="/footer/qrcode1.png"className="h-[100px]" alt="" />
        <img src="/footer/socialmedia.png"className="h-[25px]"  alt="" />
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
