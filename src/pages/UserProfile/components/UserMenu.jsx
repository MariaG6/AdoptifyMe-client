import {
  PawPrint,
  SignOut,
  Storefront,
  UserList,
  Users,
} from "@phosphor-icons/react";

import React, { useState } from "react";
import UserDetails from "./UserDetails";
import ShopDetails from "./ShopDetails";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../../context/Auth.Context";

function UserMenu() {
  // Handle display components

  // User details component
  const [showUserDetails, setShowUserDetails] = useState(false);
  const { logOutUser } = useAuthContext();

  const openUserDetails = () => {
    setShowUserDetails(true);
  };

  const closeUserDetails = () => {
    setShowUserDetails(false);
  };

  // Shop details component
  const [showShopDetails, setShowShopDetails] = useState(false);

  const openShopDetails = () => {
    setShowShopDetails(true);
  };

  const closeShopDetails = () => {
    setShowShopDetails(false);
  };

  const isAdmin = true;

  return (
    <div className="w-48 bg-gray-200 h-screen p-4 flex flex-col">
      <section className="mb-4">
        <h3 className="text-lg text-gray-700">Account</h3>
        {/* <div className="my-2">
          <NavLink to="/" className="flex items-center text-sm text-gray-400">
            <House size={25} color="gray" />
            <p className="ml-2">Homepage</p>
          </NavLink>
        </div> */}

        <div className="my-2">
          <NavLink
            to={"/user/details"}
            className="flex items-center text-sm text-gray-400"
          >
            <UserList size={25} color="gray" />
            <p className="ml-2">User Details</p>
          </NavLink>
        </div>

        <div className="my-2">
          <NavLink
            to="/user/pets"
            className="flex items-center text-sm text-gray-400"
          >
            <PawPrint size={25} color="gray" />
            <p className="ml-2">My Pets</p>
          </NavLink>
        </div>

        <div className="my-2">
          <NavLink
            to="/user/shops"
            onClick={openShopDetails}
            className="flex items-center text-sm text-gray-400"
          >
            <Storefront size={25} color="gray" />
            <p className="ml-2">My Shops</p>
          </NavLink>
        </div>
      </section>

      {isAdmin && (
        <section className="mb-4">
          <h3 className="text-lg text-gray-700">Admin Controls</h3>
          <div className="my-2">
            <NavLink to="/admin/users" className="flex items-center text-sm text-gray-400">
              <Users size={25} color="gray" />
              <p className="ml-2">Users</p>
            </NavLink>
          </div>
          <div className="my-2">
            <NavLink to="/" className="flex items-center text-sm text-gray-400">
              <Storefront size={25} color="gray" />
              <p className="ml-2">Shops</p>
            </NavLink>
          </div>
          <div className="my-2">
            <NavLink to="/" className="flex items-center text-sm text-gray-400">
              <PawPrint size={25} color="gray" />
              <p className="ml-2">Pets</p>
            </NavLink>
          </div>
        </section>
      )}

      <section>
        <div className="bottom-0 absolute">
          <button
            className="flex items-center text-sm text-gray-700"
            onClick={logOutUser}
          >
            <SignOut size={25} />
            <p className="ml-2">Logout</p>
          </button>
        </div>
      </section>

      {showUserDetails && <UserDetails onClose={closeUserDetails} />}
      {showShopDetails && <ShopDetails onClose={closeShopDetails} />}
    </div>
  );
}

export default UserMenu;
