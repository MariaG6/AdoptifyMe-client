import React, { useState } from "react";
import { usePetsContext } from "../../../context/pets.context";
import { useNavigate } from "react-router-dom";

function Filters() {
  const [gender, setGender] = useState("");
  const [typeOfPet, settypeOfPet] = useState("");
  const [size, setSize] = useState("");
  const navigator = useNavigate();

  const { loading, searchPets } = usePetsContext();

  function makeSearch() {
    const searchQuery = {
      gender,
      size,
      typeOfAnimal: typeOfPet,
    };

    searchPets(searchQuery).then(() => {
      navigator("/search");
    });
  }

  return (
    <div className="w-full md:w-3/4 self-center bg-white shadow-xl flex justify-between items-center">
      <div className="p-4 grid grid-cols-1 md:grid-cols-4 w-full gap-4 items-center">
        <div className="w-full">
          <select
            name="type"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className="border-2 border-gray-300 p-2 rounded-xl w-full"
          >
            <option value="">Gender of pet</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="w-full">
          <select
            name="typeOfPet"
            value={typeOfPet}
            onChange={(e) => {
              settypeOfPet(e.target.value);
            }}
            className="border-2 border-gray-300 p-2 rounded-xl w-full"
          >
            <option value="">Type of pet</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        <div className="w-full">
          <select
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
            className="border-2 border-gray-300 p-2 rounded-xl w-full"
          >
            <option value="">Size of pet</option>
            <option value="very small">Very small</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="big">Big</option>
            <option value="super big">Super Big</option>
          </select>
        </div>

        <div className="flex w-full justify-end">
          <button
            className="w-full rounded-xl py-3 text-white bg-orange-400"
            disabled={loading}
            onClick={makeSearch}
          >
            {loading ? "Running Search" : "Search"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
