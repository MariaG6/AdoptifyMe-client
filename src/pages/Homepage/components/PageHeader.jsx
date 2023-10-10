import React from "react";
import dogImage from "../../../assets/images/dog.png";
import { Fade, Slide } from "react-awesome-reveal";

function PageHeader() {
  return (
    <header className="flex h-[90vh] px-8">
      <div className="w-2/5 flex flex-col justify-center px-8">
        <Slide direction="left">
          <span className="text-4xl font-extrabold">
            Give a Home, Gain a <span className="text-red-500">Heart</span>
          </span>

          <p className="mt-8 text-lg tracking-widest leading-loose">
            Welcome to <span className="text-[#0080FF]">Adoptify</span>
            <span className="text-[#FFFF00]">Me</span>, where we're dedicated to
            connecting loving families with furry companions in need of a
            forever home.
          </p>
        </Slide>
      </div>

      <div className="w-3/5 flex justify-center aspect-auto">
        <Fade>
          <img src={dogImage} alt="" className="object-contain w-full h-full" />
        </Fade>
      </div>
    </header>
  );
}

export default PageHeader;
