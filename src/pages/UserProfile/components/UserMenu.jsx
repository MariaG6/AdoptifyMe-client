import {
  Dog,
  PawPrint,
  SignOut,
  Storefront,
  UserList,
  Users,
} from "@phosphor-icons/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/Auth.Context";

function UserMenu() {
  const { logOutUser, user } = useAuthContext();
  const { isAdmin } = user || {};
  const navigator = useNavigate();

  return (
    <div className="w-52 h-max p-4 flex flex-col">
      <section className="mb-4">
        <h3 className="text-lg text-gray-700">Account</h3>
        {/* <div className="my-2">
          <NavLink
            exact
            to="/"
            className="flex items-center text-sm text-gray-400 active:text-AMblue active:text-lg"
          >
            <House size={25} color="gray" />
            <p className="ml-2">Homepage</p>
          </NavLink>
        </div> */}

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
              to="/admin/users"
              className="flex items-center text-sm text-gray-400"
            >
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
            onClick={() => {
              logOutUser();

              navigator("/", { replace: true });
            }}
          >
            <SignOut size={25} />
            <p className="ml-2">Logout</p>
          </button>
        </div>
      </section>
    </div>
  );
}

export default UserMenu;
