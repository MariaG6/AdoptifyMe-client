import React from "react";
import { MapPin } from "@phosphor-icons/react";

function PetCard() {
  return (
    <div className="w-full shadow-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-orange-400/20">
      <div className="absolute rounded-br-xl backdrop-blur-md bg-white px-2 text-orange-400 text-sm">
        New
      </div>
      {/* image */}
      <div className="h-[180px] overflow-hidden">
        <img
          src="https://unsplash.com/photos/2l0CWTpcChI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZG9nfGVufDB8fHx8MTY5NzAzNTk0MHww&force=true&w=640"
          alt="pet image"
          className="object-cover"
        />
      </div>

      {/* card body */}
      <div className="p-3 text-sm flex justify-between bg-white">
        <h3>Salo</h3>
        <div className="flex gap-1 items-center">
          <MapPin size={14} />
          <h3 className="">Madrid</h3>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
