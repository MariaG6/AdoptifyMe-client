import React from "react";
import { useAuthContext } from "../../../context/Auth.Context";

function UserDetails() {
  const user = useAuthContext();

  return (
    <div className="items-center justify-center flex w-max mr-20 flex-1">
      <div className="p-4 w-1/2 rounded-lg">
        <h2 className="text-2xl mb-4 text-AMblue">User Details</h2>
        <div className="flex items-center mb-2">
          <img
            src={user.profilePicture}
            alt={user.fullName}
            className="w-12 h-12 rounded-full mr-2"
          />
          <div>
            <h3 className="text-xl text-gray-700">{user.fullName}</h3>
            <p className="text-gray-700">{user.email}</p>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-lg text-orange-400">Contact Information</h4>
          <div></div>
          <p className="text-gray-700 text-sm">
            Phone: {user.phoneNumber || "N/A"}
          </p>
          <p className="text-gray-700 text-sm">Address: {user.address}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg text-orange-400">Adopted Pets</h4>
          {/* {user.adoptedPets.length > 0 ? (
            <ul>
              {user.adoptedPets.map((pet) => (
                <li key={pet.id}>{pet.name}</li>
              ))}
            </ul>
          ) : (
            <p>No adopted pets</p>
          )} */}
        </div>
        <div className="mb-4">
          <h4 className="text-lg text-orange-400">Reported Pets</h4>
          {/* {user.reportedPets.length > 0 ? (
            <ul>
              {user.reportedPets.map((pet) => (
                <li key={pet.id}>{pet.name}</li>
              ))}
            </ul>
          ) : (
            <p>No reported pets</p>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
