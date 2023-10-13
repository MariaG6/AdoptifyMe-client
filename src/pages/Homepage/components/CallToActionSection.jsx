import { Storefront } from "@phosphor-icons/react";
import { PawPrint } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Slide } from "react-awesome-reveal";

function CallToActionSection() {
  return (
    <div className="bg-white rounded-xl">
      {/* for shop owners */}
      <div className="flex flex-col md:flex-row">
        {/* image */}

        <div className="w-full md:w-1/2">
          <Slide direction="left" triggerOnce>
            <img
              src="https://unsplash.com/photos/aI3EBLvcyu4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHBldCUyMHNob3B8ZW58MHx8fHwxNjk3MjA5MDk5fDA&force=true&w=640"
              alt=""
            />
          </Slide>
        </div>
        {/* text */}
        <div className="p-6 w-full md:w-1/2 flex flex-col justify-center items-center gap-6">
          <div className="p-5 bg-orange-50 rounded-full">
            <Storefront size={40} className="text-orange-400" />
          </div>
          <h3>For Pet Sellers/Pet Shop Owners:</h3>
          <p className="text-sm text-gray-400 text-center px-14">
            Ready to make a difference? Create your virtual pet shop, showcase
            your furry friends, and help them find loving homes. <br /> List
            your pets for adoption and be a part of the rescue mission!
          </p>

          <button className="bg-orange-400 text-white p-3 rounded-xl text-sm shadow-xl shadow-orange-400/25">
            Create your virtual shop now!
          </button>
        </div>
      </div>

      {/* for rescue */}
      <div className="flex flex-col md:flex-row">
        {/* text */}
        <div className="p-6 w-full md:w-1/2 flex flex-col justify-center items-center gap-6">
          <div className="p-5 bg-orange-50 rounded-full">
            <PawPrint size={40} className="text-orange-400" />
          </div>
          <h3>For Pet Rescuers/Found Pet Owners:</h3>
          <p className="text-sm text-gray-400 text-center px-14">
            Be a hero today! If you've found a lost pet or a street pet in need,
            let us know.
            <br />
            <br />
            We're here to support your rescue efforts and connect these pets
            with a caring community.
          </p>

          <button className="bg-orange-400 text-white p-3 rounded-xl text-sm shadow-xl shadow-orange-400/25">
            Report a pet
          </button>
        </div>

        {/* image */}

        <div className="w-full md:w-1/2">
          <Slide direction="right" triggerOnce>
            <img
              src="https://unsplash.com/photos/jOD_1MSlVCc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8c3RyZWV0JTIwY2F0fGVufDB8fHx8MTY5NzIxMDc1NHww&force=true&w=640"
              alt="Sleeping street cat"
              className=""
            />
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default CallToActionSection;
