import React from "react";
import dogImage from "../../../assets/images/dog.png";
import { Fade, Slide } from "react-awesome-reveal";
import Filters from "./Filters";
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@phosphor-icons/react";

function PageHeader() {
  return (
    <header className="flex flex-col min-h-content px-8 gap-4">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-2/5 flex flex-col justify-center px-8 gap-8 text-center md:text-left mt-4">
          <Slide direction="left" triggerOnce>
            <span className="text-4xl font-extrabold">
              Give a Home, Gain a <span className="text-red-500">Heart</span>
            </span>

            <p className="text-md tracking-widest leading-loose">
              Welcome to
              <span className="text-[#0080FF] font-bold"> Adoptify</span>
              <span className="text-orange-400 font-bold">Me</span>, where we
              are dedicated to connecting loving families with furry companions
              in need of a forever home.
            </p>
          </Slide>

          {/* call to action button */}
          <Fade triggerOnce>
            <div className="bg-orange-400 text-white w-full md:w-2/3 px-4 py-3 rounded-xl shadow-xl shadow-orange-400/30">
              <Link
                to={"/pets"}
                className="flex items-center justify-center gap-4"
              >
                <span className="">Find A Pet</span>
                <ArrowCircleRight size={26} />
              </Link>
            </div>
          </Fade>
        </div>

        <div className="w-full lg:w-3/5 flex justify-center aspect-auto">
          <Fade triggerOnce>
            <img
              src={dogImage}
              alt="dog banner image"
              className="object-contain w-full h-full"
            />
          </Fade>
        </div>
      </div>

      {/* <div>
        <Filters />
      </div> */}
    </header>
  );
}

export default PageHeader;
