import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { useAdminContext } from "../../../../context/Admin.Context";
import ProfileShopCard from "../../../../components/ProfileShopCard";

function AdminAllShops() {

  const { fetchAllShops, allShops, loading } = useAdminContext();

  // Fetch user shops when the component render
  useEffect(() => {
    fetchAllShops()
  }, []);

  if (loading) {
    return (
      <div className="text-xl mb-4 text-AMblue flex justify-center items-center h-full bg-white">
        <p>Loading Shops </p>
      </div>
    );
  }

  if (allShops.length > 0) {
    return (
      <div className="flex flex-col bg-white min-h-full p-4 pb-12">
        <h2 className="text-2xl text-AMblue">All shops</h2>
        <hr />
        <div className="grid grid-cols-1 gap-4 mt-4">
          {allShops.map((shop) => (
            <div key={shop._id} className="my-2">
              <ProfileShopCard shopData={shop} key={shop._id} />

              {/* <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
                Delete shop from AdoptifyMe
              </button> */}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="items-center justify-center flex flex-1 bg-white h-full">
        <div className="p-4 rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-2xl mb-4 text-AMblue">Shop Details</h2>
          <p>You currently have no shops.</p>
          <Link to="/shops/new">
            <button className="mt-4 bg-AMblue text-white py-2 px-4 rounded flex gap-4 items-center shadow-xl shadow-AMblue/25">
              Connect your first shop <ArrowCircleRight />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AdminAllShops;
