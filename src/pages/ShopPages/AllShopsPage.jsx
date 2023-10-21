import React from "react";
import ShopCard from "../../components/ShopCard";
import PetCardShimmer from "../../components/PetCardShimmer";
import { SmileySad } from "@phosphor-icons/react";
import { useShopsContext } from "../../context/shops.context";

function AllShopsPage() {
  const { allShops, loading } = useShopsContext();

  return (
    <div className="w-full pb-12">
      {/* body */}
      <section className="pt-16 px-4 md:px-8">
        <div className="bg-opacity-50 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4 px-4 md:px-8 py-4 ">
            {loading
              ? [1, 2, 3, 4, 5, 6].map((shimmerId) => {
                  return <PetCardShimmer key={shimmerId} />;
                })
              : allShops?.map((shopData) => {
                  return <ShopCard shopData={shopData} key={shopData._id} />;
                })}
          </div>

          {allShops?.length === 0 && !loading && (
            <div className="flex justify-center flex-col items-center pb-12">
              <SmileySad size={80} />
              <h1>Shops Unavailable at the moment!</h1>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default AllShopsPage;
