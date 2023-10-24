import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../../context/Auth.Context";
import { Storefront } from "@phosphor-icons/react";
import { useShopsContext } from "../../../context/shops.context";

function MyShop() {
  const user = useAuthContext();
  const [userShops, setUserShops] = useState([]);
  const { getShopByUser, loading, setLoading } = useShopsContext();

  // Fetch user shops when the component render
  useEffect(() => {
    async function fetchUserShops() {
      try {
        const userShopsData = await getShopByUser(user._id);
        if (userShopsData && userShopsData.length > 0) {
          setUserShops(userShopsData);
          setLoading(false);
        } else {
          setUserShops([]);
        }
      } catch (error) {
        console.error("Error getting user shops", error);
      }
    }

    fetchUserShops();
  }, [user]);

  if (loading) {
    return <p className="text-2xl mb-4 text-AMblue">Loading shops...</p>;
  }

  if (userShops.length > 0) {
    return (
      <div className="items-center justify-center flex w-max mr-20 flex-1">
        <div className="p-4 w-1/2 rounded-lg">
          <h2 className="text-2xl mb-4 text-AMblue">Shop Details</h2>
          {userShops.map((shop) => (
            <div key={shop._id} className="my-2">
              <NavLink
                to={`/shops/details/${shop._id}`}
                className="flex items-center text-xl text-gray-700 active:text-AMblue active:text-lg"
              >
                <Storefront size={25} color="gray" />
                <h3 className="ml-2">{shop.shopName}</h3>
              </NavLink>
              <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
                Delete shop from AdoptifyMe
              </button>
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

export default MyShop;
