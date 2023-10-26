import React from "react";
import { Routes, Route } from "react-router-dom";
import UserMenu from "./components/UserMenu";
import UserDetails from "./components/UserDetails";
import MyShops from "./components/MyShops";
import MyPets from "./components/MyPets";
import Adoptions from "./components/Adoptions";
import ViewAdoptionApplication from "./components/ViewAdoptionApplication";

function UserProfile() {
  return (
    <div className="h-screen w-full pb-12 flex">
      <section className="pt-16 px-8 md:px-12 w-full flex">
        <div className="bg-opacity-50 backdrop-blur-sm flex min-w-[100%]">
          <div>
            <UserMenu />
          </div>

          <div className="w-[100%] h-full overflow-y-scroll">
            <Routes>
              <Route path="details" element={<UserDetails />} />
              <Route path="mypets" element={<MyPets />} />
              <Route path="shops" element={<MyShops />} />
              <Route path="shops/:id/applications" element={<Adoptions />} />
              <Route
                path="shops/:shopId/applications/:queId"
                element={<ViewAdoptionApplication />}
              />
            </Routes>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
