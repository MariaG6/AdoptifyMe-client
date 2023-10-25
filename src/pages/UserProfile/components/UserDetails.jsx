import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/Auth.Context";
import toast from "react-hot-toast";

function UserDetails() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const { errorMessage, isLoading, getUserById, user } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const uploadData = new FormData();
  };

  useEffect(() => {
    getUserById(user?._id);

    setFullName(user?.fullName);
    setEmail(user?.email);
    setPhoneNumber(user?.phoneNumber);
    setAddress(user?.address);
  }, []);

  return (
    <div className="bg-white">
      <div className="bg-[url(https://unsplash.com/photos/ltsKOg_q_Gc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHBldHxlbnwwfDB8fHwxNjk4MjI1MzMwfDA&force=true&w=1920)] h-[25vh] bg-cover bg-center">
        <div className="w-full h-[25vh] bg-gradient-to-b from-black to-transparent opacity-50 z-10"></div>
      </div>

      {/* profile picture section */}

      <div className="w-full p-4 z-40 h-min rounded-md justify-center items-center flex flex-col bg-transparent mt-[-40px]">
        <div>
          <img
            // sx={{ bgcolor: deepOrange[500] }}
            alt="profile picture"
            src={user?.profilePicture}
            className="w-40 h-40 shadow-md rounded-full"
          />
        </div>
      </div>

      {/* body */}
      <div className="items-center justify-center flex w-full flex-1">
        <div className="bg-white px-10 pb-8">
          <p className="font-medium text-lg text-gray-500 mt-4">
            Profile Details
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
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
                type="email"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="tel"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>

            <div>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="file"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Add profile picture"
                onChange={(e) => {
                  setProfilePicture(e.target.files[0]);
                }}
              />
            </div>

            <div className="mt-8 flex flex-col gap-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-AMblue text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out"
              >
                {isLoading ? "Saving" : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
