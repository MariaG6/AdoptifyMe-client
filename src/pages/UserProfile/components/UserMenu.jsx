import {
  PawPrint,
  SignOut,
  Storefront,
  UserList,
  Users,
} from "@phosphor-icons/react";
import { House } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { NavLink } from "react-router-dom";

function UserMenu() {
  const isAdmin = false;

  return (
    <div className="w-48 bg-gray-200 p-4 flex flex-col justify-between">
      <section className="mb-4">
        <h3 className="text-lg text-gray-700">Account</h3>
        <div className="my-2">
          <NavLink
            exact
            to="/"
            className="flex items-center text-sm text-gray-400 active:text-AMblue active:text-lg"
          >
            <House size={25} color="gray" />
            <p className="ml-2">Homepage</p>
          </NavLink>
        </div>

        <div className="my-2">
          <NavLink
            exact
            to="/user/details"
            className="flex items-center text-sm text-gray-400 active:text-AMblue active:text-lg"
          >
            <UserList size={25} color="gray" />
            <p className="ml-2">User Details</p>
          </NavLink>
        </div>

        <div className="my-2">
          <NavLink
            exact
            to="/user/mypets"
            className="flex items-center text-sm text-gray-400 active:text-AMblue active:text-lg"
          >
            <PawPrint size={25} color="gray" />
            <p className="ml-2">My Pets</p>
          </NavLink>
        </div>

        <div className="my-2">
          <NavLink
            exact
            to="/user/shops"
            className="flex items-center text-sm text-gray-400 active:text-AMblue active:text-lg"
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
            <NavLink
              exact
              to="/"
              className="flex items-center text-sm text-gray-400 active:text-AMblue active:text-lg"
            >
              <Users size={25} color="gray" />
              <p className="ml-2">Users</p>
            </NavLink>
          </div>
          <div className="my-2">
            <NavLink
              exact
              to="/"
              className="flex items-center text-sm text-gray-400 active:text-AMblue active:text-lg"
            >
              <Storefront size={25} color="gray" />
              <p className="ml-2">Shops</p>
            </NavLink>
          </div>
          <div className="my-2">
            <NavLink
              exact
              to="/"
              className="flex items-center text-sm text-gray-400 active:text-AMblue active:text-lg"
            >
              <PawPrint size={25} color="gray" />
              <p className="ml-2">Pets</p>
            </NavLink>
          </div>
        </section>
      )}

      <section>
        <div className="mt-auto">
          <a
            href="/logout"
            className="flex items-center text-sm text-gray-700 active:text-AMblue active:text-lg"
          >
            <SignOut size={25} />
            <p className="ml-2">Logout</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default UserMenu;
