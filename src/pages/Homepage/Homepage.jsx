import React from "react";
import PageHeader from "./components/PageHeader";
import Filters from "./components/Filters";
import PetsSection from "./components/PetsSection";
import AdoptionProcess from "./components/AdoptionProcess";

function Homepage() {
  return (
    <div className="w-full pb-12">
      {/* landing page */}

      <div className="pt-24">
        <PageHeader />
      </div>

      {/* page body */}
      <div className="px-4 md:px-8 mt-12 md:mt-6">
        {/* search */}
        <div className="flex flex-col">
          <div className="flex flex-col w-full justify-center text-center mb-4 gap-2">
            <h4 className="text-xl font-bold text-orange-400">
              Search for a pet
            </h4>
            <p className="text-orange-400">
              Refine your results to find your new bestie.
            </p>
          </div>
          <Filters />
        </div>

        {/* pet section */}

        <div className="bg-opacity-50 backdrop-blur-md px-4 md:px-8 mt-8 md:mt-12">
          <PetsSection />
        </div>

        <div className="bg-opacity-50 backdrop-blur-md px-4 md:px-8 mt-8 md:mt-8">
          <AdoptionProcess />
        </div>


      </div>
    </div>
  );
}

export default Homepage;
