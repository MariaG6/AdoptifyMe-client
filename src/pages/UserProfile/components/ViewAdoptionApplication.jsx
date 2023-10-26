import React, { useEffect } from "react";
import { useAuthContext } from "../../../context/Auth.Context";
import { useShopsContext } from "../../../context/shops.context";
import { useParams } from "react-router-dom";
import { XCircle } from "@phosphor-icons/react/dist/ssr";
import { CheckCircle } from "@phosphor-icons/react";

function ViewAdoptionApplication() {
  const { shopId, queId } = useParams();
  const { getAdoptionApplicationById, loading, application } =
    useShopsContext();

  // Fetch user shops when the component render
  useEffect(() => {
    getAdoptionApplicationById(shopId, queId);
  }, [queId]);

  if (loading) {
    return (
      <div className="text-xl mb-4 text-AMblue flex justify-center items-center h-full bg-white">
        <p>Loading Application</p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col bg-white h-full p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl text-AMblue">Application</h2>

          <div className="flex gap-6">
            <button className="bg-red-400 px-5 py-2 text-white flex items-center gap-2"><XCircle size={25}/> Reject</button>
            <button className="bg-green-400 px-5 py-2 text-white flex items-center gap-2"><CheckCircle size={25}/> Accept</button>
          </div>
        </div>
        <hr />
        <div className="mt-4">
          {/* user Profile */}
          <div></div>

          {/* application answers */}
          <div></div>
        </div>
      </div>
    );
  }
}

export default ViewAdoptionApplication;
