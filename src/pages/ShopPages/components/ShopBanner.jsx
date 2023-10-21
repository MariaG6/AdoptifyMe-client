import React from "react";

const ShopBanner = ({ shopName, website, shopLogo }) => {
  const bannerStyle = {
    backgroundImage: `url(https://unsplash.com/photos/fliwkBbS7oM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fHBldHxlbnwwfDB8fHwxNjk3ODkwODI1fDA&force=true&w=1920)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

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
      </div>
    </div>
  );
};

export default ShopBanner;
