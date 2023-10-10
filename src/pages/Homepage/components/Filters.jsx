import React from "react";

function Filters() {
  return (
    <div className="w-[80%] bg-white rounded-full shadow-xl flex justify-between items-center">
      <div className="p-4">Input fields here</div>

      <div className="items-center flex">
        <button className="px-16 py-8 text-white rounded-full bg-orange-400">
          Search
        </button>
      </div>
    </div>
  );
}

export default Filters;
