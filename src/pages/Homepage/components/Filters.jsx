import React from "react";

function Filters() {
  return (
    <div className="w-full md:w-2/3 self-center bg-white shadow-xl flex justify-between items-center">
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 w-full gap-4 items-center">
        <div className="w-full">
          <input
            type="text"
            name="location"
            id=""
            placeholder="location, area"
            className="border-2 border-gray-300 p-2 rounded-xl w-full"
          />
        </div>

        <div className="w-full">
          <select
            name="type"
            id=""
            className="border-2 border-gray-300 p-2 rounded-xl w-full"
          >
            <option value="">Select a type of pet</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
          </select>
        </div>

        <div className="flex w-full justify-end">
          <button className="w-full rounded-xl py-3 text-white bg-orange-400">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
