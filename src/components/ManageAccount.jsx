
import Navbar from "./Navbar";
import Footer from "./Footer";

function ManageAccount() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex justify-center lg:justify-end lg:mr-[50px] mt-6 lg:mt-10">
        <p className="font-medium">
          Welcome <span className="text-red-500">Pushpendra Singh</span>
        </p>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row">
 
        <div className="w-full lg:w-[230px] mt-[30px] lg:mt-[50px] h-auto lg:h-[650px] lg:ml-[150px] p-5 border rounded-lg shadow-lg mx-4 lg:mx-0">
          <p className="text-xl font-medium">Manage My Account</p>
          <div className="lg:ml-[40px]">
            <p className="font-medium mt-8 text-red-500">My Profile</p>
            <p className="font-medium mt-3">My Address Book</p>
            <p className="font-medium mt-3">My Payment Options</p>
          </div>
          <p className="text-xl mt-10 font-medium">Manage Orders</p>
          <div className="lg:ml-[40px]">
            <p className="font-medium mt-8">My Returns</p>
            <p className="font-medium mt-3">My Cancellations</p>
          </div>
          <p className="text-xl font-medium mt-8">My Wishlist</p>
        </div>

  
        <div className="w-full lg:w-[700px] lg:ml-[350px] h-auto lg:h-[650px] mt-[30px] lg:mt-[50px] p-5 border rounded-lg shadow-lg mx-4 lg:mx-0">
          <span className="text-red-500 text-2xl lg:text-3xl font-semibold">
            Edit Your Profile
          </span>


          <div className="mt-5 ">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex flex-col">
                <p className="text-lg font-medium">Name</p>
                <input
                  type="text"
                  placeholder="Name..."
                  className="input text-lg font-medium input-bordered input-accent w-full lg:w-[300px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-medium">Last Name</p>
                <input
                  type="text"
                  placeholder="Last Name..."
                  className="input text-lg font-medium input-bordered input-accent w-full lg:w-[300px]"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 mt-5">
              <div className="flex flex-col">
                <p className="text-lg font-medium">Email</p>
                <input
                  type="email"
                  placeholder="Email..."
                  className="input text-lg font-medium input-bordered input-accent w-full lg:w-[300px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-medium">Address</p>
                <input
                  type="text"
                  placeholder="Address..."
                  className="input text-lg font-medium input-bordered input-accent w-full lg:w-[300px]"
                />
              </div>
            </div>
          </div>

      
          <div className="mt-10">
            <p className="text-xl font-medium mb-5">Password Changes</p>
            <div className="flex flex-col gap-4">
              <input
                type="password"
                placeholder="Old Password"
                className="input text-lg font-medium input-bordered input-accent w-full lg:w-[630px]"
              />
              <input
                type="password"
                placeholder="New Password"
                className="input text-lg font-medium input-bordered input-accent w-full lg:w-[630px]"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="input text-lg font-medium input-bordered input-accent w-full lg:w-[630px]"
              />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end gap-4 mt-10">
            <button className="border-2 h-[56px] rounded-md w-[120px] lg:w-[150px] text-lg lg:text-xl font-medium hover:bg-red-500 hover:text-white">
              Cancel
            </button>
            <button className="bg-red-500 text-white h-[56px] rounded-md hover:bg-white hover:text-black border-2 border-black w-[160px] lg:w-[201px] text-lg lg:text-xl font-medium">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <Footer className="mt-auto" />
    </div>
  );
}

export default ManageAccount;
