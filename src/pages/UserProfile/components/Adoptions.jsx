import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../../context/Auth.Context";
import { Storefront } from "@phosphor-icons/react";
import { useShopsContext } from "../../../context/shops.context";
import ShopCard from "../../../components/ShopCard";

function Adoptions() {
  const { user } = useAuthContext();

  const { getShopByUser, userShops, loading } = useShopsContext();

  // Fetch user shops when the component render
  useEffect(() => {
    getShopByUser(user?._id);
  }, [user._id]);

  if (loading) {
    return (
      <div className="text-xl mb-4 text-AMblue flex justify-center items-center h-full">
        <p>Loading Your Shops </p>
      </div>
    );
  }

  if (userShops.length > 0) {
    return (
      <div className="flex flex-col bg-white h-full p-4">
        <h2 className="text-2xl mb-4 text-AMblue">Your shops</h2>
        <div className="grid grid-cols-3 gap-4">
          {userShops.map((shop) => (
            <div key={shop._id} className="my-2">
              <ShopCard shopData={shop} key={shop._id} />

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
      <div className="items-center justify-center flex w-max mr-20 flex-1">
        <div className="p-4 w-1/2 rounded-lg">
          <h2 className="text-2xl mb-4 text-AMblue">Shop Details</h2>
          <p>You currently have no shops.</p>
          <Link to="/shops/new">
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Connect your first shop
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Adoptions;
