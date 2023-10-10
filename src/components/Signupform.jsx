import React, { useState } from "react";

function Signupform() {
    const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFullName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setAddress("");
    setProfilePicture("");
  };
  
  return (
    <div className="flex w-full h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <h1 className="text-5xl font-semibold">Welcome to Adoptify!</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Please enter your details
          </p>
        <form onSubmit={handleSubmit}>

          <div className="mt-8">
            <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
          </div>
          <div>
            <input
            type='email'
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Password"
              type="password"
            />
          </div>
          <div>
            <input
            type='tel'
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Phone number" value={phoneNumber} 
              onChange={(e)=>{setPhoneNumber(e.target.value)}}
            />
          </div>

          <div>
            <input
            type='text'
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Address" value={address}
              onChange={(e)=>{setAddress(e.target.value)}}
            />
          </div>
          <div>
            <input
            type='text'
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Add profile picture" value={profilePicture}
              onChange={(e)=>{setProfilePicture(e.target.value)}}
            />
          </div>

          <div className="mt-8 flex flex-col gap-y-4">
          <button
                type="submit"
                className="bg-blue-500 text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out"
              >
                Sign up
              </button>
          </div>
        </form>
        </div>
      </div>

      <div className="hidden lg:flex h-full items-center justify-center w-1/2">
        <img
          src="https://unsplash.com/photos/XATEEfeN7C4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk2OTU3NTA0fA&force=true&w=2400"
          alt="Puppy-img"
        />
      </div>
    </div>
  );
}

export default Signupform;
