import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShopBanner from "./components/ShopBanner";
import { useShopsContext } from "../../context/shops.context";
import { useAuthContext } from "../../context/Auth.Context";
import PetCardShimmer from "../../components/PetCardShimmer";
import PetCardOwner from "../../components/PetCardOwner";

function ShopDetailsPage() {
  const { getShopById, shopDetails, loading } = useShopsContext();
  const { user } = useAuthContext();
  const { id } = useParams();

  const navigator = useNavigate();

  useEffect(() => {
    getShopById(id);
  }, [id]);

  return (
    <div className="pt-16 pb-24">
      <ShopBanner {...shopDetails} />

      {/* body */}
      <section className="px-12 mt-8">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">Pets available</h3>

          {/* {shopDetails?.owner.includes(user._id) && (
            <button
              className="flex items-center gap-4 bg-orange-400 p-2 text-sm text-white rounded"
              onClick={() => {
                navigator(`/shops/${shopDetails._id}/pets/new`);
              }}
            >
              Add New Pet
            </button>
          )} */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4 px-4 py-4 bg-opacity-50 backdrop-blur-md">
          {loading
            ? [1, 2, 3, 4, 5, 6].map((shimmerId) => {
                return <PetCardShimmer key={shimmerId} />;
              })
            : shopDetails?.pets.map((petData) => {
                return <PetCardOwner petData={petData} key={petData._id} />;
              })}
        </div>
      </section>
    </div>
  );
}

export default ShopDetailsPage;
