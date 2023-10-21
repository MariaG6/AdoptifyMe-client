import React from "react";
import UserMenu from "./components/UserMenu";

function UserProfile() {
  return (
    <div className="h-screen w-full pb-12 flex">
      {/* body */}
      <section className="pt-16 px-8 md:px-12 w-full flex">
        <div className="bg-opacity-50 backdrop-blur-sm p-4 flex-grow flex">
          <UserMenu />
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
