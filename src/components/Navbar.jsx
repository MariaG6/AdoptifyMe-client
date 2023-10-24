import { ArrowCircleRight, DotsNine } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/Auth.Context";

function Navbar() {
  const { isLoggedIn, user } = useAuthContext();

  const [open, setOpen] = useState(false);
  const navigator = useNavigate();
  const [navBarColor, setNavBarColor] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className="w-full h-auto bg-transparent overflow-x-hidden fixed z-30 top-0 left-0">
      <nav
        className={`w-full lg:h-16 md:h-16 h-16 ${
          navBarColor
            ? "bg-opacity-50 backdrop-blur-md shadow-xl"
            : " bg-transparent"
        } lg:px-16 md:px-9 px-8 flex justify-between items-center`}
      >
        <Link
          to={`/`}
          className="font-extrabold flex items-center relative md:text-2xl text-lg"
        >
          <span className="text-[#0080FF]">Adoptify</span>
          <span className="text-orange-400">Me</span>
        </Link>

        <div className="lg:flex hidden items-center h-full gap-20">
          <ul className="flex items-center justify-center h-full gap-4 relative">
            <li className="w-full text-base">
              <NavLink
                to={"/"}
                className={
                  "relative inline-block px-2 whitespace-nowrap text-black text-xs font-bold transition-all duration-200 hover:text-[#0080FF]"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="w-full text-base">
              <NavLink
                to={"/pets"}
                className={
                  "relative inline-block px-2 whitespace-nowrap text-black text-xs font-bold transition-all duration-200 hover:text-[#0080FF]"
                }
              >
                Adoptable Pets
              </NavLink>
            </li>

            <li className="w-full text-base">
              <NavLink
                to={"/success-stories"}
                className={
                  "relative inline-block px-2 whitespace-nowrap text-black text-xs font-bold transition-all duration-200 hover:text-[#0080FF]"
                }
              >
                Success Stories
              </NavLink>
            </li>

            <li className="w-full text-base">
              <NavLink
                to={"/shops"}
                className={
                  "relative inline-block px-2 whitespace-nowrap text-black text-xs font-bold transition-all duration-200 hover:text-[#0080FF]"
                }
              >
                Shops
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex">
          {!isLoggedIn && (
            <button
              className="text-white text-sm bg-AMblue px-6 py-2 rounded-xl"
              onClick={() => {
                navigator("/login");
              }}
            >
              Login
            </button>
          )}

          {isLoggedIn && (
            <button
              className="bg-AMblue/30 p-2 rounded-full"
              onClick={() => {
                navigator("/user/details");
              }}
            >
              {`${user.fullName.split(" ")[0][0]}${
                user.fullName.split(" ")[1][0]
              }`}
            </button>
          )}
        </div>

        {/* toggle for mobile */}
        <div
          className="hamburger lg:hidden flex text-white cursor-pointer"
          onClick={handleToggle}
        >
          <p className="text-black">
            <DotsNine size={30} color="currentColor" weight="light" />
          </p>
        </div>
      </nav>

      {/* mobile navbar*/}
      <nav
        className={`flex justify-end lg:hidden h-screen w-full bg-gray-950/90 fixed top-0  ${
          open ? "right-0" : "-right-[120vw]"
        } transition-all duration-500 ease-out`}
      >
        <div
          className={`w-full md:w-[50%] h-screen bg-white flex flex-col justify-between items-center relative ${
            open ? "right-0" : "-right-[120vw]"
          } transition-all duration-500 ease-out delay-300`}
        >
          <section className="w-full px-4 py-6 flex flex-col gap-16">
            <div className="w-full flex pt-5 px-4 justify-between items-center">
              <Link
                to={`/`}
                className="font-extrabold flex items-center relative md:text-2xl text-lg"
              >
                <span className="text-[#0080FF]">Adoptify</span>
                <span className="text-orange-400">Me</span>
              </Link>
              <div
                className="hamburger text-white cursor-pointer"
                onClick={handleToggle}
              >
                {/* <ArrowCircleRight
                  size={25}
                  color="currentColor"
                  weight="light"
                /> */}
                <p className="text-black">
                  <ArrowCircleRight
                    size={25}
                    color="currentColor"
                    weight="light"
                  />
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-4 px-4">
              <li className="w-full text-base">
                <NavLink
                  to={"/"}
                  className={
                    "relative inline-block px-2 whitespace-nowrap text-black text-xs font-bold transition-all duration-200 hover:text-[#0080FF]"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="w-full text-base">
                <NavLink
                  to={"/pets"}
                  className={
                    "relative inline-block px-2 whitespace-nowrap text-black text-xs font-bold transition-all duration-200 hover:text-[#0080FF]"
                  }
                >
                  Adoptable Pets
                </NavLink>
              </li>

              <li className="w-full text-base">
                <NavLink
                  to={"/shops"}
                  className={
                    "relative inline-block px-2 whitespace-nowrap text-black text-xs font-bold transition-all duration-200 hover:text-[#0080FF]"
                  }
                >
                  Shops
                </NavLink>
              </li>

              <li className="w-full text-base">
                <NavLink
                  to={"/success-stories"}
                  className={
                    "relative inline-block px-2 whitespace-nowrap text-black text-xs font-bold transition-all duration-200 hover:text-[#0080FF]"
                  }
                >
                  Success Stories
                </NavLink>
              </li>
            </ul>

            {!isLoggedIn && (
              <div className="flex flex-col justify-center px-4">
                <button
                  className="text-white text-sm bg-AMblue px-6 py-2 rounded-xl"
                  onClick={() => {
                    navigator("/login");
                  }}
                >
                  Login
                </button>
              </div>
            )}
          </section>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
