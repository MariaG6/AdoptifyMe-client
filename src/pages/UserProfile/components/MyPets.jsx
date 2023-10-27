import React from "react";
import { useAuthContext } from "../../../context/Auth.Context";
import PetCard from "../../../components/PetCard";
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@phosphor-icons/react";

function MyPets() {
  const { user } = useAuthContext();
  const userPets = user.adoptedPets;

  if (userPets?.length > 0) {
    return (
      <div className="flex flex-col bg-white h-full p-4">
        <h2 className="text-2xl text-AMblue">My Pets</h2>
        <hr />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {userPets.map((pet) => (
            <div key={pet._id} className="my-2">
              <PetCard petData={pet} key={pet._id} />

              {/* <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
              Delete shop from AdoptifyMe
            </button> */}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="items-center justify-center flex flex-1 bg-white h-full">
        <div className="p-4 rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-2xl mb-4 text-AMblue">My pets</h2>
          <p>You currently have no adopted pets.</p>
          <Link to="/pets">
            <button className="mt-4 bg-AMblue text-white py-2 px-4 rounded flex gap-4 items-center shadow-xl shadow-AMblue/25">
              Adopt your first furry friend! <ArrowCircleRight />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MyPets;
