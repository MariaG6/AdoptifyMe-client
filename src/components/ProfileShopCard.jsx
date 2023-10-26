import { ArrowSquareIn } from "@phosphor-icons/react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

function ProfileShopCard({ shopData }) {
  const navigator = useNavigate();
  return (
    // <Link to={`/shops/${shopData._id}`}>
    <div>
      <div className="w-[80%] shadow-xl shadow-gray-400/10 overflow-hidden hover:shadow-orange-400/20 rounded-xl flex">
        {/* <div className="absolute rounded-br-xl backdrop-blur-md bg-white px-2 text-orange-400 text-sm">
        New
      </div> */}
        <div></div>
        {/* image */}
        <div className="h-[150px] overflow-hidden w-[30%]">
          <Fade>
            <img
              src={shopData.shopLogo}
              alt="shop logo"
              className="object-cover object-center"
            />
          </Fade>
        </div>

        {/* card body */}
        <div className="p-3 text-sm w-full">
          <div className="flex justify-between w-full">
            <div>
              <h3 className="text-2xl">{shopData.shopName}</h3>
              <a
                href={shopData.website}
                target="_blank"
                className="text-gray-400 flex items-center gap-1 text-xs"
              >
                Visit Website <ArrowSquareIn size={16}/>
              </a>
            </div>

            <div className="flex gap-1 text-gray-400 text-sm">
              <h3>{shopData.pets.length}</h3>
              <h3 className="overflow-ellipsis">Pets</h3>
            </div>
          </div>

          <hr className="mt-4" />

          {/* buttons */}
          <div className="mt-4 gap-6 flex">
            <button className="bg-AMblue text-white px-3 py-2 shadow-lg"   onClick={() => {
                navigator(`/user/shops/${shopData._id}/applications`);
              }}>
              View Adoption Applications
            </button>
            <button
              className="bg-orange-400 text-white px-3 py-2 shadow-lg"
              onClick={() => {
                navigator(`/shops/${shopData._id}`);
              }}
            >
              View and Manage {shopData.shopName}
            </button>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
}

export default ProfileShopCard;
