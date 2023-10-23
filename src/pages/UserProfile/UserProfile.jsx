import React from "react";
import { Routes, Route } from "react-router-dom";
import UserMenu from "./components/UserMenu";
import UserDetails from "./components/UserDetails";
import MyShops from "./components/MyShops";
import MyPets from "./components/MyPets";

function UserProfile() {
  return (
    <div className="h-screen w-full pb-12 flex">
      <section className="pt-16 px-8 md:px-12 w-full flex">
        <div className="bg-opacity-50 backdrop-blur-sm p-4 flex-grow flex">
          <UserMenu />
          <Routes>
            <Route path="details" element={<UserDetails />} />
            <Route path="mypets" element={<MyPets />} />
            <Route path="shops" element={<MyShops />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
