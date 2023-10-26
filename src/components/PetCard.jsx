import React from "react";
import { MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function PetCard({ petData }) {
  return (
    <Link to={`/pets/${petData._id}`}>
      <div className="w-full shadow-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-orange-400/20 rounded-xl">
        {/* <div className="absolute rounded-br-xl backdrop-blur-md bg-white px-2 text-orange-400 text-sm">
        New
      </div> */}
        {/* image */}
        <div className="h-[180px] overflow-hidden flex items-center">
          <Fade>
            <img
              src={petData.profilePicture}
              alt="pet image"
              className="object-cover"
            />
          </Fade>
        </div>

        {/* card body */}
        <div className="p-3 text-sm flex justify-between bg-white">
          <h3>{petData.name}</h3>

          <div className="flex gap-1 items-center">
            <MapPin size={14} />
            <h3 className="overflow-ellipsis">{petData?.shop?.shopName}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PetCard;
