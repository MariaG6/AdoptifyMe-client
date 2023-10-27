import React, { useEffect } from "react";
import { usePetsContext } from "../../context/pets.context";
import PetCardShimmer from "../../components/PetCardShimmer";

function SuccessStories() {
  const {
    fetchAllAdoptedPets,
    allPets,

    loading,

    allAdoptedPets,
  } = usePetsContext();

  useEffect(() => {
    fetchAllAdoptedPets();
  }, []);

  return (
    <div className="w-full pb-12">
      {/* body */}
      <section className="pt-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-4 px-4 md:px-8 py-4 bg-opacity-50 backdrop-blur-md">
          {loading
            ? [1, 2, 3, 4, 5, 6].map((shimmerId) => {
                return <PetCardShimmer key={shimmerId} />;
              })
            : [
                "https://unsplash.com/photos/ltsKOg_q_Gc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHBldHxlbnwwfDB8fHwxNjk4MjI1MzMwfDA&force=true&w=640",
                "https://unsplash.com/photos/ltsKOg_q_Gc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHBldHxlbnwwfDB8fHwxNjk4MjI1MzMwfDA&force=true&w=640",
                "https://unsplash.com/photos/73flblFUksY/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk4NDI0MTMxfA&force=true&w=640",
                "https://unsplash.com/photos/ltsKOg_q_Gc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHBldHxlbnwwfDB8fHwxNjk4MjI1MzMwfDA&force=true&w=640",
                "https://unsplash.com/photos/g2FtlFrc164/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGV0fGVufDB8MXx8fDE2OTg0MjQxNzR8MA&force=true&w=640",
              ].map((item, index) => (
                <div>
                  <img src={item} alt="" className="max-h-96 object-cover" />
                </div>
              ))}
        </div>
      </section>
    </div>
  );
}

export default SuccessStories;
