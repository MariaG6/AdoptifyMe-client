import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Link } from "react-router-dom";
import PetCard from "../../../components/PetCard";
import { usePetsContext } from "../../../context/pets.context";
import PetCardShimmer from "../../../components/PetCardShimmer";

function PetsSection() {
  const { loading, allPets } = usePetsContext();
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Pets</h3>

        <Link to={"/pets"} className="flex items-center gap-4 text-orange-400">
          Find all pets <ArrowCircleRight size={20} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
        {loading
          ? [1, 2, 3, 4, 5, 6].map((shimmerId) => {
              return <PetCardShimmer key={shimmerId} />;
            })
          : allPets.map((petData) => {
              return <PetCard petData={petData} key={petData._id} />;
            })}
      </div>
    </div>
  );
}

export default PetsSection;
