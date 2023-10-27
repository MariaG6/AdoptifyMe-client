import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/Auth.Context";
import { useShopsContext } from "../../../context/shops.context";
import ProfileShopCard from "../../../components/ProfileShopCard";
import { ArrowCircleRight } from "@phosphor-icons/react";

function MyShop() {
  const { user } = useAuthContext();

  const { getShopByUser, userShops, loading, error } = useShopsContext();

  // Fetch user shops when the component render
  useEffect(() => {
    getShopByUser(user?._id);
  }, [user._id]);

  if (loading) {
    return (
      <div className="text-xl mb-4 text-AMblue flex justify-center items-center h-full bg-white">
        <p>Loading Your Shops </p>
      </div>
    );
  }

  if (userShops.length > 0) {
    return (
      <div className="flex flex-col bg-white h-full p-4">
        <h2 className="text-2xl text-AMblue">Your shops</h2>
        <hr />
        <div className="grid grid-cols-1 gap-4 mt-4">
          {userShops.map((shop) => (
            <div key={shop._id} className="my-2">
              <ProfileShopCard shopData={shop} key={shop._id} />

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
          <h2 className="text-2xl mb-4 text-AMblue">Shop Details</h2>
          <p>You currently have no shops.</p>
          <Link to="/shops/new">
            <button className="mt-4 bg-AMblue text-white py-2 px-4 rounded flex gap-4 items-center shadow-xl shadow-AMblue/25">
              Connect your first shop <ArrowCircleRight />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MyShop;
