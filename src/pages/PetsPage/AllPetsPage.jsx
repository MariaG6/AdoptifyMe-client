import React, { useEffect } from "react";
import { usePetsContext } from "../../context/pets.context";
import PetCardShimmer from "../../components/PetCardShimmer";
import PetCard from "../../components/PetCard";

function AllPetsPage() {
  const { loading, allPets } = usePetsContext();

  useEffect(() => {
window.scroll(0, 0)
  }, [])

  return (
    <div className="w-full pb-12">
      {/* body */}
      <section className="pt-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4 px-4 md:px-8 py-4 bg-opacity-50 backdrop-blur-md">
          {loading
            ? [1, 2, 3, 4, 5, 6].map((shimmerId) => {
                return <PetCardShimmer key={shimmerId} />;
              })
            : allPets.map((petData) => {
                return <PetCard petData={petData} key={petData._id} />;
              })}
        </div>
      </section>
    </div>
  );
}

export default AllPetsPage;
