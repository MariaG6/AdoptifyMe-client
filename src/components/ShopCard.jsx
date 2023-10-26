import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function ShopCard({ shopData }) {
  return (
    <Link to={`/shops/${shopData._id}`}>
      <div className="w-full shadow-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-orange-400/20 rounded-xl">
        {/* <div className="absolute rounded-br-xl backdrop-blur-md bg-white px-2 text-orange-400 text-sm">
        New
      </div> */}
        {/* image */}
        <div className="h-[180px] overflow-hidden flex items-center">
          <Fade>
            <img
              src={shopData.shopLogo}
              alt="pet image"
              className="object-cover"
            />
          </Fade>
        </div>

        {/* card body */}
        <div className="p-3 text-sm flex justify-between bg-white">
          <h3>{shopData.shopName}</h3>

          <div className="flex gap-1 items-center text-gray-400 text-sm">
            <h3>{shopData.pets.length}</h3>
            <h3 className="overflow-ellipsis">Animals</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ShopCard;
