import React from "react";
import PetCardShimmer from "../../components/PetCardShimmer";
import { SmileyBlank } from "@phosphor-icons/react";
import PetCard from "../../components/PetCard";
import { usePetsContext } from "../../context/pets.context";

function SearchResults() {
  const { searchResults, loading } = usePetsContext();

  return (
    <div className="w-full pb-12">
      {/* body */}

      <section className="pt-16 px-4 md:px-8">
        <div className="bg-opacity-50 backdrop-blur-md px-4 md:px-8 py-4 ">
          <h2 className="text-xl">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
            {loading
              ? [1, 2, 3, 4, 5, 6].map((shimmerId) => {
                  return <PetCardShimmer key={shimmerId} />;
                })
              : searchResults?.map((petData) => {
                  return <PetCard petData={petData} key={petData._id} />;
                })}
          </div>

          {searchResults?.length === 0 && !loading && (
            <div className="flex justify-center flex-col items-center pb-12">
              <SmileyBlank size={80} />
              <h1>No results found for your query!</h1>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default SearchResults;
