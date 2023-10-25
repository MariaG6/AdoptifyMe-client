import { PencilLine, Trash } from "@phosphor-icons/react";
import React from "react";
import { useAuthContext } from "../../../context/Auth.Context";
import { useNavigate } from "react-router-dom";

const ShopBanner = ({ shopName, website, shopLogo, owner, _id }) => {
  const bannerStyle = {
    backgroundImage: `url(https://unsplash.com/photos/fliwkBbS7oM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fHBldHxlbnwwfDB8fHwxNjk3ODkwODI1fDA&force=true&w=1920)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const navigator = useNavigate();

  const { user } = useAuthContext();

  return (
    <div className="relative h-[70vh]">
      <div className="absolute inset-0" style={bannerStyle}>
        <div className="absolute inset-0 bg-gradient-to-t from-AMblue to-black opacity-50"></div>
      </div>
      <div className="max-w-4xl mx-auto relative flex flex-col items-center h-[70vh] justify-center">
        <img
          src={shopLogo}
          alt={`${shopName} Logo`}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h1 className="text-3xl font-bold text-white mb-2">{shopName}</h1>
        <p className="text-white mb-4">
          Visit our website:{" "}
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline"
          >
            {website}
          </a>
        </p>

        {owner?.includes(user?._id) ? (
          <div className="gap-6 flex">
            <button
              className="bg-green-400 text-white px-4 py-3 flex items-center gap-2 rounded-xl"
              onClick={() => {
                navigator(`/shops/${_id}/update`);
              }}
            >
              <PencilLine size={20} /> Edit Shop Details
            </button>
            <button className="bg-red-400 text-white px-3 py-3 flex items-center gap-2 rounded-xl">
              <Trash size={20} /> Delete This Shop
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ShopBanner;
