import {
  PawPrint,
  SignOut,
  Storefront,
  UserList,
  Users,
} from "@phosphor-icons/react";
import { House } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
import UserDetails from "./UserDetails";
import ShopDetails from "./ShopDetails";
import { NavLink } from "react-router-dom";

function UserMenu() {
  // Handle display components

  // User details component
  const [showUserDetails, setShowUserDetails] = useState(false);

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
    <div className="w-48 bg-gray-200 p-4 flex flex-col z-10">
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

        {isAdmin ? (
          <div className="my-2">
            <NavLink to="/" className="flex items-center text-sm text-gray-400">
              <PawPrint size={25} color="gray" />
              <p className="ml-2">All Pets</p>
            </NavLink>
          </div>
        ) : (
          <div className="my-2">
            <NavLink to="/" className="flex items-center text-sm text-gray-400">
              <PawPrint size={25} color="gray" />
              <p className="ml-2">My Pets</p>
            </NavLink>
          </div>
        )}

        {isAdmin ? (
          <div className="my-2">
            <NavLink to="/" className="flex items-center text-sm text-gray-400">
              <Storefront size={25} color="gray" />
              <p className="ml-2">All Shops</p>
            </NavLink>
          </div>
        ) : (
          <div className="my-2">
            <NavLink
              to="/shops/details"
              onClick={openShopDetails}
              className="flex items-center text-sm text-gray-400"
            >
              <Storefront size={25} color="gray" />
              <p className="ml-2">My Shops</p>
            </NavLink>
          </div>
        )}
      </section>

      {isAdmin && (
        <section className="mb-4">
          <h3 className="text-lg text-gray-700">Admin Controls</h3>
          <div className="my-2">
            <NavLink to="/" className="flex items-center text-sm text-gray-400">
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
        <div className="mt-auto">
          <a href="/logout" className="flex items-center text-sm text-gray-700">
            <SignOut size={25} />
            <p className="ml-2">Logout</p>
          </a>
        </div>
      </section>

      {showUserDetails && <UserDetails onClose={closeUserDetails} />}
      {showShopDetails && <ShopDetails onClose={closeShopDetails} />}
    </div>
  );
}

export default UserMenu;
