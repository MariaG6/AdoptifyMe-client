import React from "react";
import dogImage from "../../../assets/images/dog.png";
import { Fade, Slide } from "react-awesome-reveal";
import Filters from "./Filters";

function PageHeader() {
  return (
    <header className="flex flex-col min-h-[100vh] px-8 gap-4">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-2/5 flex flex-col justify-center px-8 ">
          <Slide direction="left">
            <span className="text-4xl font-extrabold">
              Give a Home, Gain a <span className="text-red-500">Heart</span>
            </span>

            <p className="mt-8 text-md tracking-widest leading-loose">
              Welcome to <span className="text-[#0080FF] font-bold">Adoptify</span>
              <span className="text-orange-400 font-bold">Me</span>, where we're dedicated
              to connecting loving families with furry companions in need of a
              forever home.
            </p>
          </Slide>
        </div>

        <div className="w-full lg:w-3/5 flex justify-center aspect-auto">
          <Fade>
            <img
              src={dogImage}
              alt="dog banner image"
              className="object-contain w-full h-full"
            />
          </Fade>
        </div>
      </div>

      <div>
        <Filters />
      </div>
    </header>
  );
}

export default PageHeader;
