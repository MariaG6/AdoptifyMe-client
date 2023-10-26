import React from "react";
import { useAuthContext } from "../../../context/Auth.Context";

function UserCard() {
  const { user } = useAuthContext();

  return (
    <div className="shadow-xl shadow-gray-400/10 overflow-hidden hover:shadow-orange-400/20 rounded-xl">
      <div className="w-full border-r pb-20 bg-white">
        {/* gradient */}
        <div className="h-125 rounded-tl-4 rounded-tr-4 bg-gradient-to-r from-yellow-500 to-orange-500 h-32"></div>
        {/* profile down */}
        <div className="mt-5 relative text-center">
          <img
            className="h-48 w-48 rounded-full p-5 bg-white -mt-16 mx-auto"
            src={user.profilePicture}
            alt="profilePicture"
          />
          {/* profile title */}
          <div className="text-lg font-bold">{user.name} Name</div>
          {/* profile description */}
          <div className="text-base px-5 py-3">
            <p>Address {user.address}</p>
          </div>
          {/* profile button */}
          <button className="w-1/2 mx-auto px-2 py-2 text-sm bg-AMblue text-white shadow-lg border border-AMblue">
            <a className="text-none text-white" href={`mailto:${user.email}`}>Send an email</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
